// 1. import mongoose - require mongoose
const mongoose = require('mongoose');

// 2. Declaring the name for the database
const DB = "dutTech_db";

// 3. Connecting the mongoose library to MongoDB
// mongoose .connect is a promise that means it has .then and .catch
mongoose.connect("mongodb://localhost/"+DB, {
    // This is optional in newer version this part is obsolete
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=>console.log(`connected to mongodb ${DB} database`))
    .catch((err)=>console.log(`error connecting to ${DB} database`, err))
