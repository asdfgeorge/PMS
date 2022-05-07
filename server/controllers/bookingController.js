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
        
        if (req.body.CheckInBookedTime === null || req.body.CheckOutBookedTime === null) 
        { return res.status(400).send(`Need to provide both check in and check out time in req body!! (CheckInBookedTime, CheckOutBookedTime)`) }
        else if (!isValidDate(req.body.CheckInBookedTime) || !isValidDate(req.body.CheckOutBookedTime)) {
            return res.status(400).send(`Dates are not valid!!!`)
        }
        else if (req.body.CheckInBookedTime >= req.body.CheckOutBookedTime) {
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
// NOTE: need to fix date validation, doesn't work here rn
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

            // if the booking time or space is changing
            if (req.body.CheckInBookedTime || req.body.CheckOutBookedTime || req.body.parkingSpaceId) {
                // if bookings already exist for this parking spot
                const bookingCheck = await Booking.find({parkingSpaceId: req.body.parkingSpaceId});
                if (bookingCheck !== null) {
                    bookingCheck.forEach(booking => {
                        if (DoDatesConflict(booking.CheckInBookedTime, req.body.CheckInBookedTime,
                            booking.CheckOutBookedTime, req.body.CheckInBookedTime)) {
                                return res.status(400).send(`A space ${req.body.parkingSpaceId} already has a booking (From: ${booking.CheckInBookedTime} To:${booking.CheckOutBookedTime}) at this time! For context, trying to book at (From: ${req.body.CheckInBookedTime} To:${req.body.CheckOutBookedTime})`)
                            }
                    });
                }
            }


            await Booking.findByIdAndUpdate( req.params.id, {
                isApproved: req.body.isApproved,
                parkingSpaceId: req.body.parkingSpaceId, 
                CheckInBookedTime: req.body.CheckInBookedTime,
                CheckOutBookedTime: req.body.CheckOutBookedTime,
              })

              const updatedBooking = await Booking.findOne({ _id: req.params.id})
     
              return res.status(201).send(`Booking ${req.params.id} (@${updatedBooking.parkingSpaceId}) updated.`);
        
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
}


/// check in and out
export const checkIntoBooking = async (req, res) => {}


export const checkOutBooking = async (req, res) => {}

