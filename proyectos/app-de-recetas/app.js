const APP_ID = '85cc9bdd';
const APP_KEY = '6872c8fa172bb2d0920394775682557e';

const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

const recipelistEl = document.getElementById('recipeList');


function displayRecipes(recipes) {
  recipelistEl.innerHTML = " ";
  recipes.forEach((recipeData) => {
    const recipe = recipeData.recipe;
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipeItem');

    const recipeImageEl = document.createElement('img');
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "Recipe image";

    const recipeTitleEl = document.createElement('h2');
    recipeTitleEl.textContent = recipe.label;

    // const recipeList = document.createElement('ul');
    // recipeList.textContent = "Ingredientes:";

    // const recipeIngredients = document.createElement('li');

    recipeList.appendChild(recipeItemEl);
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    // recipeItemEl.appendChild(recipeList);




    // recipeItemEl.appendChild(recipeList);
    // recipeItemEl.appendChild(recipeImageEl);
    // recipeItemEl.appendChild(recipeTitleEl);
    // recipelistEl.appendChild(recipeItemEl);
    // recipeList.appendChild(recipeIngredients);
  });
}

async function getRecipes() {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);

  const data = await response.json();

  return data.hits;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
  console.log(recipes);
}

init();

btnSearch.addEventListener('click', () => {
  console.log('click');
});


