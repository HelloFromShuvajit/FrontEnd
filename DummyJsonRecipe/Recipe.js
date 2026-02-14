async function loadRecipe() {
    const recipeId = document.getElementById('recipeId').value;

    document.getElementById('loading').style.display= 'block';
    document.getElementById('error').style.display= 'none';
    document.getElementById('info').style.display= 'none';
    try{
        console.log('Fetching recipe');
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);

        console.log('Response received.');
        if(!response.ok){
            throw new Error('Recipe not found (Status: ${response.status})');
        }
        
        
        const data = await response.json();
        console.log('data:', data);
        console.log('Recipe Name:', data.name);
        console.log('Ingredients:', data.ingredients);
        console.log('Instructions', data.instructions);
        console.log('img src:', data.image);
        
        displayRecipe(data);
    }
    catch{
        console.error("Error in loading recipe!");
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorMessage').textContent = `Recipe not found`;
    }
}
function displayRecipe(recipe) {
        document.getElementById('loading').style.display= 'none';
        document.getElementById('info').style.display= 'block';

        document.getElementById('recipeName').textContent = `${recipe.name}`;
        document.getElementById('prepTime').textContent = `${recipe.prepTimeMinutes} min prep`;
        document.getElementById('cookTime').textContent = `${recipe.cookTimeMinutes} min cook`;
        document.getElementById('servings').textContent = `${recipe.servings} servings`;
        document.getElementById('difficulty').textContent = recipe.difficulty;
        document.getElementById('img').src = recipe.image;


        const ingredientsList = document.getElementById('ingredientsList');
        ingredientsList.innerHTML ='';

        recipe.ingredients.forEach(ingredient => {
            const li= document.createElement('li');
            li.textContent=ingredient;
            ingredientsList.appendChild(li);
        });


        const instructionsList = document.getElementById('instructionsList');
        instructionsList.innerHTML ='';

        recipe.instructions.forEach(instruction => {
            const li= document.createElement('li');
            li.textContent=instruction;
            instructionsList.appendChild(li);
        });

    }

window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, calling loadRecipe');
    loadRecipe();
});