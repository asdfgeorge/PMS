import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
        },
        parkingSpaceId: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
        },
        isApproved: {
            type:Boolean,
            required:true,
            default: false
        },
        CheckedIn: {
            type:Boolean,
            required:true,
            default: false
        },
        CheckedOut: {
            type:Boolean,
            required:true,
            default: false
        },
        paidFee: {
            type:String,
            required:true,
            unique:true,
        },
        fee: {
            type:Number,
            required:true,
            default: 0.00
        },
    },
    { timestamps: true }

);

export default mongoose.model("Booking", bookingSchema);