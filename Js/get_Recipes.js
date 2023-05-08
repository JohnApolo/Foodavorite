async function SearchForRecipe()
{
    var _apiKey = "apiKey=183bb0dd3f78405990ea50046f04cfa5";
    var _apiUrl = "https://api.spoonacular.com/recipes/complexSearch?";
    var _recipe = "&query=" + document.getElementById("SRecipe").value;
    var _number = "&number=2";
    var _apiRequest = _apiUrl + _apiKey + _recipe + _number;

    if (document.getElementById("SRecipe").value != null && document.getElementById("SRecipe").value != "")
    {
        MoveSearchbar();

        const _respond = await fetch(_apiRequest);
        const _data = await _respond.json();
        if (_respond) {
            //loading.style.display = "none";
        }

        DisplayData(_data);
    }
    else
    {
        document.getElementById("SearchError").style.display = "block";
    }
}

function DisplayData(data)
{
    const _recipes = [];
    for (var i = 0; i < data.results.length; i++)
    {
        _recipes.push([data.results[i]["id"], data.results[i]['title'], data.results[i]['image']]);
    }

    const _myList = _recipes.map((item, index1) => 
        <div className="ResultFrame" key={index1}>
            <a href= {"ingredients.html?id=" + item[0]}>
                <img src={ item[2] } alt='Logo' />
                <div className="Logo"><img src="Img/Foodavorite.png" alt="LogoMark" /></div>
                <p>{item[1]}</p>
            </a>
        </div>)

    const _root = ReactDOM.createRoot(document.getElementById('RecipeResult'));

    _root.render(_myList);
}

function OpenIngredients(id)
{
    window.location.href = "ingredients.html?id=" + id;
}