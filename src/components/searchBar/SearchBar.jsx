import './SearchBar.css';

function SearchBar() {

return (
<>
    <form action="/search" method="get">
        <input type="text" name="query" placeholder="Zoek..."/>
    </form>
</>
);
}

export default SearchBar;