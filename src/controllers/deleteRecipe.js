const fs = require('fs');
const jsonPath = './src/database/data.json';

module.exports = {

    // Delete Recipe
    deleteRecipe: (req, res) => {
        const fileReader = fs.readFileSync(jsonPath);
        const data = JSON.parse(fileReader);
        const nameFromBody = req.body.name;

        if (data.recipes.map(r => r.name).includes(nameFromBody)) {
            // Finding recipe and deleting it
            const recipeToDelete = data.recipes.indexOf(nameFromBody);
            data.recipes.splice(recipeToDelete, 1);
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
