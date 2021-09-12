// Here we are writing our CRUD operations
const Joke = require('../models/jokes.model')

// Export a function to create a joke
module.exports.createNewJoke=
    (req,res) => {
        Joke.create(req.body)
            .then(
                newlyCreatedJoke =>{
                    res.json({
                        joke: newlyCreatedJoke
                    })
                }
            )
            .catch(
                err => {
                    res.json({
                        message:'Something went wrong', error: err
                    })
                }
            );
    }

// Export a function to get all jokes
module.exports.findAllJokes = 
    (req,res) =>{
        Joke.find()
            .then(
                allDaJokes =>{
                    res.json({
                        jokes: allDaJokes
                    })
                }
            )
            .catch(
                err=>{
                    res.json({
                        message:'Something went wrong', error:err
                    })
                }
            );
    }

// module.exports.findRandomJoke = 
// (req,res) =>{
//     Joke.find()
//         .then(
//             allDaJokes =>{
//                 Math.random
//                 res.json({
//                     jokes: allDaJokes
//                 })
//             }
//         )
//         .catch(
//             err=>{
//                 res.json({
//                     message:'Something went wrong', error:err
//                 })
//             }
//         );
// }
// Export a function to get a single joke
module.exports.findOneSingleJoke =
    (req,res) => {
        Joke.findOne({_id:req.params.id})
        .then(
            oneSingleJoke =>{
                res.json({
                    joke: oneSingleJoke
                })
            }
        )
        .catch(
            err =>{
                res.json({
                    message:'Something went wrong', error:err
                })
            }
        );
    }
// export a function to update a joke
module.exports.updateExistingJoke =
    (req,res)=>{
        Joke.findOneAndUpdate(
            {
                _id:req.params.id
            },
            req.body,
            {
                new: true, runValidators: true
            }
        )
        .then(
            updateJoke=>{
                res.json({
                    joke:updateJoke
                })
            }
        )
        .catch(
            err =>{
                res.json({
                    message:'Something went wrong', error:err
                })
            }
        );
    }
// Export a function to delete a joke
module.exports.deleteAnExistingJoke=(req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({result:deletedJoke})
        })
        .catch(err =>{
            res.json({message:'Something went wrong', error:err})
        });
    }

module.exports.aRandomJoke=(req,res) =>{
    // This will give me the count of all my jokes
    Joke.count({})
    // count is returned from Joke.count
        .then(count=>{
            let randomJoke = Math.floor(Math.random()*count)
            Joke.findOne({}).skip(randomJoke)
                .then(getJokes=>{
                    res.json({result:getJokes})
                })
                .catch(err =>{
                    res.json({message:'Something went wrong', error:err})
                }); 
        })
        .catch(err =>{
            res.json({message:'Something went wrong', error:err})
        }); 
}