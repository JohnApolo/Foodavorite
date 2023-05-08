async function SearchForIngredients()
{
    const queryString = window.location.search;
    const _urlParams = new URLSearchParams(queryString);

    const _apiURL = "https://api.spoonacular.com/recipes/";
    const _apiKey = "apiKey=183bb0dd3f78405990ea50046f04cfa5";
    const _ingredientKey = _urlParams.get('id');

    const _apiRequest = _apiURL + _ingredientKey + "/information?" + _apiKey + "&includeNutrition=false";

    const _respond = await fetch(_apiRequest);
    const _data = await _respond.json();

    if (_respond) {

    }

    DisplayData(_data);
}

function DisplayData(data)
{
    const _ingredientsName = [];
    const _recipeSteps = [];
    const _recipeInfo = [data['title'], data['summary'], data['image']];

    //Move the object list to an array
    for (var i = 0; i < data.extendedIngredients.length; i++) 
    {
        _ingredientsName.push(data.extendedIngredients[i]['nameClean']);
    }

    for (var i = 0; i < data.analyzedInstructions[0]['steps'].length; i++) 
    {
        _recipeSteps.push(data.analyzedInstructions[0]['steps'][i]['step']);
    }

    //Display recipe informations
    var _root = ReactDOM.createRoot(document.getElementById('RecipeInfo'));
    _root.render(
        <div>
            <div className="RecipeImg"><img src={_recipeInfo[2]} alt={_recipeInfo[0]} /></div>
            <h3>{_recipeInfo[0]}</h3>
            <div className="summary" dangerouslySetInnerHTML={{__html: _recipeInfo[1]}}></div>
        </div>
    );

    //Display ingredients of the recipe
    const _ingredientList = _ingredientsName.map((item, index) => <li key={index}>{item}</li>)

    _root = ReactDOM.createRoot(document.getElementById('IngredientsResult'));
    _root.render(
        <div key="ingredients">
            <h3>Ingredients</h3>
            <ol>{_ingredientList}</ol>
        </div>
    );

    //Display steps of the recipe
    const _stepList = _recipeSteps.map((item, index) => <li key={index}>{item}</li>)
    _root = ReactDOM.createRoot(document.getElementById('StepsResult'));
    _root.render(
        <div key="steps">
            <h3>Steps</h3>
            <ol>{_stepList}</ol>
        </div>
    );
}

SearchForIngredients();