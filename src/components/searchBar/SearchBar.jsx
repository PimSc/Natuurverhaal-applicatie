import { useLocation } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {

    // Haal de huidige locatie op met behulp van useLocation() van react-router-dom.
    const location = useLocation();

    // bepaalt op welke pagina`s het zoekbalk component zichtbaar is
    const allowedPages = ['/',"/Excursies","/Prikbord"];
    const showSearchBar = allowedPages.includes(location.pathname);

    // Als de huidige locatie niet in de allowedPages array staat, return null.
    if (!showSearchBar) {
        return null;
    }

    return (
        <form>
            <input className="SearchBar" type="text" name="query" placeholder="Zoek..." />
        </form>
    );
}

export default SearchBar;