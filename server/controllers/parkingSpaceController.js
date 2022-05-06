import ParkingSpace from '../models/ParkingSpace.js'

// index parking spaces
export const getAllParkingSpaces = async (req, res) => {
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

}

// update
export const updateParkingSpace = async (req, res) => { 

}

// delete
export const deleteParkingSpace = async (req, res) => { 

}

