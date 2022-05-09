const fs = require('fs');
const jsonPath = './src/database/data.json';

module.exports = {

    // Update Recipe
    updateRecipe: (req, res) => {   
        const fileReader = fs.readFileSync(jsonPath);
        const data = JSON.parse(fileReader);
        const nameFromParams = req.params.name;

        if (data.recipes.map(r => r.name).includes(nameFromParams)) {
            const newRecipe = {
                name: nameFromParams,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions
            }

            // Finding recipe and replacing it
            const recipeToUpdate = data.recipes.indexOf(nameFromParams);
            data.recipes.splice(recipeToUpdate, 1, newRecipe);
            let formattedData = JSON.stringify(data);

            // Adding new object to data.json
            fs.writeFile(jsonPath, formattedData, (err) => {
                if (err) throw err;
                res.status(204).send();
            })

        } else {
            res.status(404).json({
                "error": "Recipe does not exist"
            });
        }
    }
}
