import mongoose from 'mongoose';

const parkingAreaSchema = new mongoose.Schema({
        name: {
            type:String,
            required:true,
        },
        description: {
            type:String
        },
    },
    { timestamps: true }

);

export default mongoose.model("ParkingArea", parkingAreaSchema);