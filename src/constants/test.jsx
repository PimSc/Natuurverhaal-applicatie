import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const allowedPages = ['/Home', '/Prikbord', '/Excursies'];
    const showSearchBar = allowedPages.includes(location.pathname);

    const handleSearch = () => {
        if (location.pathname === '/Home') {
            console.log('Zoeken vanaf /home:', searchTerm);
            // Voer hier de zoekactie uit die specifiek is voor de home pagina.
        } else if (location.pathname === '/Prikbord') {
            console.log('Zoeken vanaf /prikbord:', searchTerm);
            // Voer hier de zoekactie uit die specifiek is voor de prikbord pagina.
        } else if (location.pathname === '/Excursies') {
            console.log('Zoeken vanaf /excursies:', searchTerm);
            // Voer hier de zoekactie uit die specifiek is voor de excursies pagina.
        } else {
            console.log('Zoekbalk staat uit.');
            // Standaard zoekactie voor andere pagina's.
        }
        onSearch(searchTerm); // Geef de zoekterm door aan de bovenliggende component.
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch();
    };

    if (!showSearchBar) {
        return null;
    }

    return (
        <form>
            <input
                className="SearchBar"
                type="text"
                name="query"
                placeholder="Zoek..."
                value={searchTerm}
                onChange={handleChange}
            />
        </form>
    );
}

export default SearchBar;