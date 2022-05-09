const fs = require('fs');
const jsonPath = './src/database/data.json';

module.exports = {

    // Create Recipe
    createRecipe: (req, res) => {
        // Reading data.json synchronously
        const fileReader = fs.readFileSync(jsonPath);
        const data = JSON.parse(fileReader)
        const nameFromBody = req.body.name;

        if (!data.recipes.map(r => r.name).includes(nameFromBody)) {
            const newRecipe = {
                name: nameFromBody,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions
            }

            data.recipes.push(newRecipe);
            let formattedData = JSON.stringify(data);

            // Adding new object to data.json
            fs.writeFile(jsonPath, formattedData, (err) => {
                if (err) throw err;
                res.status(201).send();
            });

        } else {
            res.status(400).json({
                "error": "Recipe already exists"
            })
        }
    }
}
