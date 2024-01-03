import './SearchBar.css';

function SearchBar() {

return (
<>
    <form className="SearchBarPhone" action="/search" method="get">
        <input type="text" name="query" placeholder="Zoek..."/>
    </form>
</>
);
}

export default SearchBar;