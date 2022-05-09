const express = require('express');
const router = express.Router();

// Controllers
const { getAllRecipes, getRecipe } = require('../controllers/getRecipe');
const { createRecipe } = require('../controllers/createRecipe');
const { updateRecipe } = require('../controllers/updateRecipe');
const { deleteRecipe } = require('../controllers/deleteRecipe');

// Get One
router.get("/recipes/details/:name", getRecipe);

// Get All
router.get("/recipes", getAllRecipes);

// Create One
router.post("/recipes", createRecipe);

// Update All About One Recipe
router.put("/recipes", updateRecipe);

// Delete One
router.delete("/recipes", deleteRecipe)

module.exports = router;