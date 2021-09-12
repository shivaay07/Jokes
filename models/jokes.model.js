// 3. Create mongoose schema and model

// import mongoose 
const mongoose = require('mongoose')

// ------------------This part is divided into two parts-----------------------------
// a Schema - Rules that entries in tne db must follow
const JokeSchema = new mongoose.Schema({
    "setup": {
        type: String,
        minlength:[10, "atleast 10 characters required"]
    },
    "punchline": {
        type: String,
        minlength:[6, "atleast 10 characters required"]
    }
},{timestamps: true})



// Model - this is what we use to make the actual queries to the db
const Joke = mongoose.model("Joke", JokeSchema);


// export
module.exports = Joke;