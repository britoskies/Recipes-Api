# Recipes API

## Description

API for technical test at Hatchways, it manages recipes data like its name, ingredients and instructions.

Status: Finished  

## Tecnologies

<ul> 
    <li> NodeJS </li>
    <li> ExpressJS </li>
</ul>

## Modules

<ul> 
    <li> Data.json file which is being used as our data source (db)</li>
    <li> GET route that returns all recipe names </li>
    <li> GET route that takes a recipe name as a string param. Return the ingredients and the number of steps in the recipe as JSON </li>
    <li> POST route that can add additional recipes in the existing format to the backend </li>
    <li> PUT route that can update existing recipes </li>
    <li> DELETE route that can delete existing recipes </li>
</ul>

## Instructions

In the project directory, you can run:

``` npm run dev ```

To test the server side / API: <br>
Personal recommendation is using Postman, Thunder Client or any REST Client to test all of the requests. <br>

Test route [http://localhost:3000/recipes](http://localhost:3000/recipes) as a GET request to obtain all recipes. <br>

Test route [http://localhost:3000/recipes/details/garlicPasta](http://localhost:3000/recipes/details/garlicPasta) as a GET request to obtain one specific recipe. <br>

Test route [http://localhost:3000/recipes](http://localhost:3000/recipes) as a POST request to create a new recipe. <br>

Add this line of code in the body: <br>

```
{
	"name": "butteredBagel", 
		"ingredients": [
			"1 bagel", 
			"butter"
		], 
	"instructions": [
		"cut the bagel", 
		"spread butter on bagel"
	] 
} 

```

Test route [http://localhost:3000/recipes](http://localhost:3000/recipes) as a PUT request to update the entire content of a recipe. <br>

Add this line of code in the body: <br>

```
{
	"name": "butteredBagel", 
		"ingredients": [
			"1 bagel", 
			"2 tbsp butter"
		], 
	"instructions": [
		"cut the bagel", 
		"spread butter on bagel"
	] 
}

```

Test route [http://localhost:3000/recipes](http://localhost:3000/recipes) as a DELETE request to delete one recipe. <br>

Add this line of code in the body: <br>

```
{
	"name": "butteredBagel"
}

```

<br>

The server will reload when you make changes.\
You may also see any lint errors in the console.
