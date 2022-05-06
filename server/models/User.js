import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
        isAdmin: {
            type: Boolean,
            required: true,
            default:false
        },
        fname: {
            type:String,
            required:true,
        },
        lname: {
            type:String,
            required:true,
        },
        gender: {
            type:String
        },
        lisnum: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
            unique:true,
        },
        pword: {
            type:String,
            required:true,
        },
    },
    { timestamps: true }

);

export default mongoose.model("User", userSchema);