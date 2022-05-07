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
        CheckInBookedTime: {
            type:Date,
            required:true,
            default: null
        },
        CheckOutBookedTime: {
            type: Date,
            required:true,
            default: null
        },
        CheckInActualTime: {
            type:Date,
            default: null
        },
        CheckOutActualTime: {
            type: Date,
            default: null
        },
        paidFee: {
            type:Boolean,
            required:true,
            default: false
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