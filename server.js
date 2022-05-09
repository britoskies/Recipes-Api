const express = require('express'); 
const recipeRouter = require('./src/routes/recipes');

const app = express();
const port = 3000;

app.use(express.json());

// Routes Middlewares
app.use('/', recipeRouter);

app.listen(port, () => {
    console.log("Server listening on port: " + port);
})