import './SearchBar.css';

function SearchBar() {

return (
<>
    <div className="searchbarBox">
    <form action="/search" method="get">
        <input className="SearchBar" type="text" name="query" placeholder="Zoek..."/>
    </form>
</div>
</>
);
}

export default SearchBar;