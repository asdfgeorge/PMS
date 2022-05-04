import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
        userToId: {
            type:ObjectId,
            required:true,
        },
        userFromId: {
            type:ObjectId,
            required:true,
        },
        contents: {
            type:String,
            required: true
        },
        seen: {
            type:Boolean,
            default: false,
        },

    },
    { timestamps: true }

);

export default mongoose.model("Message", messageSchema);