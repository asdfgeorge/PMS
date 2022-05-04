import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';

import registerRoute from './routes/register.js'
import loginRoute from './routes/login.js'


const app = express();


const port = 5018;
const mongo_url = "mongodb://localhost:27017/pms";

// connect to mongoose
mongoose.connect(mongo_url).then(console.log("connected to MongoDB via Mongoose.")).catch(err => console.log(`Error connecting to db ${err}`));


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

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.listen(port, () => {console.log(`Server running on port ${port}`)});
