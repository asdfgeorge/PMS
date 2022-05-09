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
        car: {
           type: Map,
           of: String,
        // will be in the format
        // lplate: String
        // brand: String
        // model: String        
        }
    },
    { timestamps: true }

);

export default mongoose.model("User", userSchema);