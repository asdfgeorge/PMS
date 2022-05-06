import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
        userToId: {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
        },
        userFromId: {
            type:mongoose.Schema.Types.ObjectId,
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