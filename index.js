const express = require('express');

// run sever
const app = express();

// port define
const PORT = 5000;

// home route
app.get('/', (req, res) => {
    res.send("<h1>OnlyBays PMS</h1>");
    console.log("home route hit!");
});

// listen
app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});