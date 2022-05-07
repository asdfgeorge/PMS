import ParkingArea from '../models/ParkingArea.js'
import ParkingSpace from '../models/ParkingSpace.js'
import User from '../models/User.js'


// index parking spaces
export const getAllParkingAreas = async (req, res) => {
    try { 
        // get all parking Areas
        const parkingAreas = await ParkingArea.find();
        return res.status(200).json(parkingAreas);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}

// show single parking Area
export const getParkingArea = async (req, res) => {
    try { 
        // get single Area
        const Area = await ParkingArea.findById(req.params.id);
        if (!Area) { return res.status(404).send("Area not found.") }
        return res.status(200).json(Area);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}



/// CRUD, ADMIN ONLY!!!
// create
export const createParkingArea = async (req, res) => { 
    try {
          // check if the user is an Admin
          const user = await User.findOne({ _id : req.body.userId });
          if (user === null) {
              return res.status(404).send(`User was not found`)
          }
          if (!user.isAdmin) {
            return res.status(400).send(`User is not admin, cannot create Areas!`)
        }

        // new Area object
        const newArea = new ParkingArea({
            name: req.body.name,
            description: req.body.description, 
        });

        const Area = await newArea.save();
        return res.status(201).send(`Area ${Area._id} created.`);
      }
      catch(err) {
          console.log(err);
          return res.status(500).send(`Server error ${err}`);
      }
}

// update
export const updateParkingArea = async (req, res) => { 
    try {
        // check if the user is an Admin
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) {
            return res.status(404).send(`User was not found`)
        }
        if (!user.isAdmin) {
          return res.status(400).send(`User is not admin, cannot update Areas!`)
      }


      // check if this Area id exists
      const idCheck = await ParkingArea.findOne({_id: req.params.id});
      if (idCheck === null) {
      return res.status(404).send(`Area not found`)
      }

    // if name is included in the request, check if the desired name isn't already taken
    if (req.body.name) {
        const nameCheck = await ParkingArea.findOne({name: req.body.name});
        if (nameCheck !== null) {
            if (nameCheck.id !== idCheck.id) {
                return res.status(400).send(`An area already has this name`)
            }
        }
    }

    // update Area object
    await ParkingArea.findByIdAndUpdate( req.params.id, {
        name: req.body.name, 
        description: req.body.description,
      })

      const updatedArea = await ParkingArea.findOne({ _id: req.params.id})
     
      return res.status(201).send(`Area ${req.params.id} (${updatedArea.name}) updated.`);

    }

    catch (err) {
        console.log(err);
        return res.status(500).send(`Server error ${err}`);
    }
}

// delete
export const deleteParkingArea = async (req, res) => { 

    try {
        // check if the user is an Admin
        const user = await User.findOne({ _id : req.body.userId });
        if (user === null) {
            return res.status(404).send(`User was not found`)
        }
        if (!user.isAdmin) {
          return res.status(400).send(`User is not admin, cannot delete areas!`)
      }

      const deletedArea = await ParkingArea.findByIdAndRemove(req.params.id);
      res.status(200).json({msg: `Area deleted: ${req.params.id}`, deletedArea});
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(`Server error ${err}`);
    }
}

