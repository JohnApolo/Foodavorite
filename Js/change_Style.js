function MoveSearchbar()
{
    _searchbar = document.getElementById("Searchbar").style;
    _searchResult = document.getElementById("RecipeResult").style;

    _searchbar.animation = "moveUp 1s, fadeOutIn 2s";

    setTimeout(() => {
        _searchbar.textAlign = "center";
        _searchbar.marginTop = "5%";
        _searchResult.display = "block";
        _searchResult.animation = "fadeIn 1s";
    
        _searchbar.position = "static";
        _searchbar.left = ''
        _searchbar.top = '';
        _searchbar.transform = "none";
    }, 1000);
}