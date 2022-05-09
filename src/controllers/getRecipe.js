const data = require('../database/data');

module.exports = {

    // Get All Recipes
    getAllRecipes: (req, res) => {
        const names = data.recipes.map(r => r.name);
        res.status(200).json({
            "recipeNames": names
        });
    },

    // Get One Recipie
    getRecipe: (req, res) => {
        try {
          const recipeFromParams = req.params.name;
          const ingredients = data.recipes
            .filter(r => r.name === recipeFromParams)
            .map(r => r.ingredients);
            
          res.status(200).json({
            "details": {
              "ingredients": ingredients[0],
              "numSteps": ingredients[0].length
            }
          })
        } catch (err) {
          res.status(404).json({
            "error": "Recipe not found"
          });
        }
    }
}
