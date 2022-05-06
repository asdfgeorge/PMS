import User from '../models/User.js'
import Message from '../models/Message.js'

// debug
export const debugGetAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        return res.status(200).json(messages);

    }
    catch(err) {
        return res.status(500).send(`Server error`);
    }
}



// create a message to given user
export const createMessage = async (req, res) => {
    try {

        // req.body.userToId
        // req.body.userFromId
        // req.body.contents
        
          // check if the user we are sending to exists
          const sendToUser = await User.findOne({ _id : req.body.userToId });
          const sendFromUser = await User.findOne({ _id : req.body.userFromId });
          if (sendToUser === null) {
              return res.status(404).send(`User to send to was not found`)
          }
          if (sendFromUser === null) {
            return res.status(404).send(`User to send from was not found`)
        }


        // new message object
        const newMessage = new Message({
            userToId: req.body.userToId,
            userFromId: req.body.userFromId,
            contents: req.body.contents,
        });

        const message = await newMessage.save();
        return res.status(201).send(`Message ${message._id} created.`);


  
      }
      catch(err) {
          return res.status(500).send(`Server error`);
      }
};



// single message
export const getMessage = async (req, res) => {
    try {
          // check if this user exists
          const message = await Message.findOne({ _id : req.params.id });
          if (message === null) {
              return res.status(404).send(`Message not found`)
          }
          return res.status(200).json(message);
  
      }
      catch(err) {
          return res.status(500).send(`Server error`);
      }
};


// inbox for given user
export const getInbox = async (req, res) => {
    try {
          // check if this user exists
          const user = await User.findOne({ _id : req.params.id });
          if (user === null) {
              return res.status(404).send(`User not found`)
          }
          const messages = await Message.find({ "userToId": user._id })

          return res.status(200).json(messages);
  
      }
      catch(err) {
        console.log(err);
          return res.status(500).send(`Server error`);
          
      }
};

// outbox for given user
export const getOutbox = async (req, res) => {
    try {
          // check if this user exists
          const user = await User.findOne({ _id : req.params.id });
          if (user === null) {
              return res.status(404).send(`User not found`)
          }
          
          const messages = await Message.find({ "userFromId": req.params.id })

          return res.status(200).json(messages);
  
      }
      catch(err) {
          return res.status(500).send(`Server error`);
      }
};

// 
export const deleteMessage = async (req, res) => {
    try {
         /// validation... need user sessions
        const validation = true;
        if (!validation) { return res.status(401).send(`Unauthorised`)}
        
        // find the message
        const messageCheck = await Message.findOne({
            _id: req.params.id
        });
        if (!messageCheck) {
            return res.status(404).json({msg: `Cannot find message: ${req.params.id}`});
        }

        const deletedMessage = await Message.findByIdAndRemove(req.params.id);
        res.status(200).json({msg: `Message deleted: ${req.params.id}`, deletedMessage});
  
      }
      catch(err) {
          return res.status(500).send(`Server error`);
      }
};