import {useState} from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Alleen zoeken als de huidige pagina de "/" pagina is
        if (window.location.pathname === '/') {
            onSearch(searchTerm);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch();
    };

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