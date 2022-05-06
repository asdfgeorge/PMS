import mongoose from 'mongoose';

const parkingSpaceSchema = new mongoose.Schema({
        parkingAreaId: {
            type:mongoose.Schema.Types.ObjectId,
            default: null,
        },
        location: {
            type:String,
            required:true,
        },
        description: {
            type:String
        },
        isReserved: {
            type:Boolean,
            required:true,
            default: false
        },
        isOccupied: {
            type:Boolean,
            required:true,
            default: false
        },
        isBlocked: {
            type:Boolean,
            required:true,
            default: false
        },
    },
    { timestamps: true }

);

export default mongoose.model("ParkingSpace", parkingSpaceSchema);