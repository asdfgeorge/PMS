import ParkingSpace from '../models/ParkingSpace.js'
import User from '../models/User.js'


// index parking spaces
export const getAllParkingSpaces = async (req, res) => {
    console.log('comp sci > geography')
    try { 
        // get all parking spaces
        const parkingSpaces = await ParkingSpace.find();
        return res.status(200).json(parkingSpaces);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}

// show single parking space
export const getParkingSpace = async (req, res) => {
    try { 
        // get single space
        const space = await ParkingSpace.findById(req.params.id);
        if (!space) { return res.status(404).send("Space not found.") }
        return res.status(200).json(space);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}



/// CRUD, ADMIN ONLY!!!
// create
export const createParkingSpace = async (req, res) => { 
    try {
          // check if the user is an Admin
          const user = await User.findOne({ _id : req.body.userId });
          if (user === null) {
              return res.status(404).send(`User was not found`)
          }
          if (!user.isAdmin) {
            return res.status(400).send(`User is not admin, cannot create spaces!`)
        }

        // new space object
        const newSpace = new ParkingSpace({
            parkingAreaId: req.body.parkingAreaId,
            location: req.body.location, 
            description: req.body.description,
            isReserved: req.body.isReserved,
            isOccupied: req.body.isOccupied,
            isBlocked: req.body.isBlocked
        });

        const space = await newSpace.save();
        return res.status(201).send(`Space ${space._id} created.`);
      }
      catch(err) {
          console.log(err);
          return res.status(500).send(`Server error ${err}`);
      }
}

// update
export const updateParkingSpace = async (req, res) => { 
    try {
        // check if the user is an Admin
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) {
            return res.status(404).send(`User was not found`)
        }
        if (!user.isAdmin) {
          return res.status(400).send(`User is not admin, cannot update spaces!`)
      }


      // check if this space id exists
      const idCheck = await ParkingSpace.findOne({_id: req.params.id});
      if (idCheck === null) {
      return res.status(404).send(`Space not found`)
      }

    // if location is included in the request, check if the desired location isn't already taken
    if (req.body.location) {
        const locationCheck = await ParkingSpace.findOne({location: req.body.location});
        if (locationCheck !== null) {
            if (locationCheck.id !== idCheck.id) {
                return res.status(400).send(`A space already has this location`)
            }
        }
    }

    // update space object
    await ParkingSpace.findByIdAndUpdate( req.params.id, {
        parkingAreaId: req.body.parkingAreaId,
        location: req.body.location, 
        description: req.body.description,
        isReserved: req.body.isReserved,
        isOccupied: req.body.isOccupied,
        isBlocked: req.body.isBlocked
      })

      const updatedSpace = await ParkingSpace.findOne({ _id: req.params.id})
     
      return res.status(201).send(`Space ${req.params.id} (@${updatedSpace.location}) updated.`);

    }

    catch (err) {
        console.log(err);
        return res.status(500).send(`Server error ${err}`);
    }
}

// delete
export const deleteParkingSpace = async (req, res) => { 

    try {
        // check if the user is an Admin
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) {
            return res.status(404).send(`User was not found`)
        }
        if (!user.isAdmin) {
          return res.status(400).send(`User is not admin, cannot delete spaces!`)
      }

      const deletedSpace = await ParkingSpace.findByIdAndRemove(req.params.id);
      res.status(200).json({msg: `Space deleted: ${req.params.id}`, deletedSpace});
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(`Server error ${err}`);
    }
}

