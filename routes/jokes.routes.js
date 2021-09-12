const JokeController = require('../controllers/jokes.controller')

module.exports=
    (app)=>{
        // create - this is post route
        app.post(
            "/api/jokes",JokeController.createNewJoke
        );
        // Read all
        app.get(
            "/api/jokes",JokeController.findAllJokes
        );

        app.get(
            "/api/jokes/random",JokeController.aRandomJoke
        )
        // Readone
        app.get(
            "/api/jokes/:id",JokeController.findOneSingleJoke
        );
        // Update
        app.put(
            "/api/jokes/:id",JokeController.updateExistingJoke
        );
        // Delete
        app.delete(
            "/api/jokes/:id",JokeController.deleteAnExistingJoke
        );
        
        // app.get(
        //     "/api/jokesss/random",JokeController.aRandomJoke
        // )
    }