//createBooking, getAllBookings, 
//getAllBookingsForUser, getBooking,

//editBooking, deleteBooking, 

//checkIntoBooking, checkOutBooking


import Booking from '../models/Booking.js';
import ParkingSpace from '../models/ParkingSpace.js'
import User from '../models/User.js'

// Extra functions 
function FeeCalculator(CheckedInBookedTime,
    CheckedOutBookedTime, CheckedInActualTime, CheckedOutActualTime) {
       // if () 

}

function isValidDate(date) {
    
    if (isNaN(Date.parse(date)) == false) {
        return true
    }
    else {
        return false
    }
}

function DoDatesConflict (firstDateStart, secondDateStart, firstDateEnd, secondDateEnd) {
    if (firstDateEnd < secondDateStart || firstDateStart > secondDateEnd) {return true}
    else {return false}
}

/// Route functions

// index bookings
export const getAllBookings = async (req, res) => {
    try { 
        // get all bookings
        const booking = await Booking.find();
        return res.status(200).json(booking);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}

// index bookings for a certain user
export const getAllBookingsForUser = async (req, res) => {
    try { 
         // check if this user exists
         const user = await User.findOne({ _id : req.params.id });
         if (user === null) {
             return res.status(404).send(`User not found`)
         }
         const bookings = await Booking.find({ "userId": user._id })

        return res.status(200).json(bookings);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}


// show single booking
export const getBooking = async (req, res) => {
    try { 
        // get single booking
        const booking = await Booking.findById(req.params.id);
        if (!booking) { return res.status(404).send("Booking not found.") }
        return res.status(200).json(booking);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}


// create
export const createBooking = async (req, res) => { 
    try {
        // check if the user exists
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) { return res.status(404).send(`User was not found`) }

        // check if the space exists
        const space = await ParkingSpace.findOne({ _id : req.body.parkingSpaceId });
        if (space === null) { return res.status(404).send(`Space was not found`) }

        // check if the space is blocked
        if (space.isBlocked) {return res.status(400).send(`Space (${space.id}) is blocked!`) }

        if (req.body.CheckInBookedTime === null || req.body.CheckOutBookedTime === null) 
        { return res.status(400).send(`Need to provide both check in and check out time in req body!! (CheckInBookedTime, CheckOutBookedTime)`) }
        else if (!isValidDate(req.body.CheckInBookedTime) || !isValidDate(req.body.CheckOutBookedTime)) {
            return res.status(400).send(`Dates are not valid!!!`)
        }
        else if (Date.parse(req.body.CheckInBookedTime) >= Date.parse(req.body.CheckOutBookedTime)) {
            return res.status(400).send(`Check in time is at or after the check out time!!!`)
        }
            
        
        // new booking object
        const newBooking = new Booking({
            userId: req.body.userId,
            parkingSpaceId: req.body.parkingSpaceId,
            CheckInBookedTime: req.body.CheckInBookedTime,
            CheckOutBookedTime: req.body.CheckOutBookedTime,
            CheckInActualTime: null,
            CheckOutActualTime: null,
        });

        const booking = await newBooking.save();
        return res.status(201).send(`Booking ${booking._id} created.`);
      }
      catch(err) {
          console.log(err);
          return res.status(500).send(`Server error ${err}`);
      }
}

// update
export const editBooking = async (req, res) => { 
    try {
        // first, check if the booking exists
        const booking = await Booking.findOne({ _id : req.params.id });
        if (booking === null) {
            return res.status(404).send(`Booking was not found`)
        }

        // check if the user exists
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) {
            return res.status(404).send(`User was not found`)
        }

        // if the user is the admin, can update specific fields
        if (user.isAdmin) {

            // vars for booked checkIn and checkOut
            // if the field is included in the request body, set it to that value
            // otherwise set it to the one already in the booking
            let CheckInBookedTime = req.body.CheckInBookedTime ? req.body.CheckInBookedTime : booking.CheckInBookedTime;
            let CheckOutBookedTime = req.body.CheckOutBookedTime ? req.body.CheckOutBookedTime : booking.CheckOutBookedTime;

            // make sure checkIn time is valid
            if (CheckInBookedTime === null) 
            { return res.status(400).send(`Check in time cannot be null!`) }
            else if (!isValidDate(CheckInBookedTime)) {
                return res.status(400).send(`Check in date is not valid!!!`) 
            }

            // make sure checkOut time is valid
            if (CheckOutBookedTime === null) 
            { return res.status(400).send(`Check out time cannot be null!`) }
            else if (!isValidDate(CheckOutBookedTime)) {
                return res.status(400).send(`Check out date is not valid!!!`) 
            }

            // make sure that the check in time is not after (or at) the check out time
            if (Date.parse(CheckInBookedTime) >= Date.parse(CheckOutBookedTime)) {
                return res.status(400).send(`Check in time is at or after the check out time!!!`)
            }
        

            // if the booking time or space is changing
            if (req.body.CheckInBookedTime || req.body.CheckOutBookedTime || req.body.parkingSpaceId) {
                
                // if a booking/bookings already exist for this parking spot
                const bookingCheck = await Booking.find({parkingSpaceId: req.body.parkingSpaceId});
                if (bookingCheck !== null && bookingCheck.id !== req.params.id) {
                    // for each booking this parking spot has booked, check if the dates conflict
                    bookingCheck.forEach(booking => {
                        if (DoDatesConflict(Date.parse(booking.CheckInBookedTime), 
                                            Date.parse(CheckInBookedTime),
                                            Date.parse(booking.CheckOutBookedTime), 
                                            Date.parse(CheckInBookedTime))) {
                                return res.status(400).send(`A space ${req.body.parkingSpaceId} already has a booking (From: ${booking.CheckInBookedTime} To:${booking.CheckOutBookedTime}) at this time! For context, trying to book at (From: ${CheckInBookedTime} To:${CheckOutBookedTime})`)
                            }
                    });
                }
            }

            // if all is good, update the booking record 
            await Booking.findByIdAndUpdate( req.params.id, {
                isApproved: req.body.isApproved,
                parkingSpaceId: req.body.parkingSpaceId, 
                CheckInBookedTime: CheckInBookedTime,
                CheckOutBookedTime: CheckOutBookedTime,
              })

              // return 200
              const updatedBooking = await Booking.findOne({ _id: req.params.id})
              return res.status(200).send(`Booking ${req.params.id} (@${updatedBooking.parkingSpaceId}) updated.`);
        
        }
        else {
            return res.status(400).send(`User is not admin, cannot update booking!`)
        }
    }

    catch (err) {
        console.log(err);
        return res.status(500).send(`Server error ${err}`);
    }
}

// delete
export const deleteBooking = async (req, res) => { 
    try {
        // first, check if the booking exists
        const booking = await Booking.findOne({ _id : req.params.id });
        if (booking === null) {
            return res.status(404).send(`Booking was not found`);
        }

        // check if the user exists
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) {
            return res.status(404).send(`User was not found`);
        }

        if (!booking.userId.equals(user._id)) {
            console.log([booking.userId, user._id]);
            return res.status(400).send(`Booking userId did not match the given user's ID!!!`);
        }

        // delele booking
        const deletedBooking = await Booking.findByIdAndRemove(req.params.id);
        res.status(200).json({msg: `Booking deleted: ${req.params.id}`, deletedBooking});
    }
    catch(err) {
        res.status(500).json({msg: `sever error: ${err}`});
    }
}


/// check in and out
export const checkIntoBooking = async (req, res) => {}


export const checkOutBooking = async (req, res) => {}

