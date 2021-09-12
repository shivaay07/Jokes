// import express
// We are importing the express through require function and storing it in const express variable
// This is          FIRST STEP                                              
const express = require("express");

// Call express function store its return in const app variable 
// This is          SECOND STEP                             
const app = express();

// set the PORT on which our application will run
// this is              Third step              
// if we "CAPITALIZE" any variable it becomes "GLOBAL" variable
const PORT = 8000;  

// Import the Mongoose which is happening in mongoose.config.js
// So, here we connect the mongodb by requiring the file here
require("./config/mongoose.config")


//                      Fifth Step                              
// Lets declare the middleware 
app.use(express.json(), express.urlencoded({extended: true}))
//          v                   v                       
//  This allow us to parse json on browser | this allow us to retrieve parameter from url that we pass

// Routes after the middleware
// require('./routes/jokes.routes')(app)
const routesObj = require('./routes/jokes.routes');
routesObj(app);


// Start the Server -------------Fourth Step------------------------------------
// This part should always be at the bottom 
app.listen(PORT, ()=>console.log(`Server up at port ${PORT}`))

