import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// routes import
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import parkingSpaceRoutes from './routes/parkingSpace.js'
import parkingAreaRoutes from './routes/parkingArea.js'
//import bookingRoutes from './routes/booking.js'
import messageRoutes from './routes/message.js'


const app = express();

// environment vars
const port = 5018;
const mongo_url = "mongodb://localhost:27017/pms";

// connect to mongoose
mongoose.connect(mongo_url).then(console.log("connected to MongoDB via Mongoose.")).catch(err => console.log(`Error connecting to db ${err}`));

// middleware
app.use(cors());
app.use(express.json())
app.use(express.static('../client/dist'))


app.get('/', (req, res) => {
    res.sendFile('../client/dist/index.html')
})

// using this to test axios endpoints
// app.post('/test', (req, res) => {
//     console.log('Req received')
//     res.status(200)
// })

// routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/message', messageRoutes);

app.use('/space', parkingSpaceRoutes);
app.use('/area', parkingAreaRoutes);

/*
import User from './models/User.js';
new User({
    isAdmin: true,
    fname: "Admin",
    lname: "Adminson",
    gender: "Unknown",
    lisnum: "000",
    email: "admin@onlybays.com",
    pword: "$2b$10$uiAN3/KADsFiJz9x6XjocODlDADoWzAIGPcXLZ.OxXjjBFZnCHzmq"
}).save(); */

// start server on port
app.listen(port, () => {console.log(`Server running on port ${port}`)});
