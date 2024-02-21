import './Searchbar.css';
import {useContext} from 'react';
import SearchContext from './../../context/SearchContext.jsx';


const Searchbar = () => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);

    };

    return (



    // <div className="elementCenterContainer" id="searchbarBlogOvervieuw">
        <div id="searchbarBlogOvervieuw">
        <form action="">
            <input
                className="searchBar"
                type="text"
                name="query"
                placeholder="Zoek..."
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    </div>


)
    ;
};

export default Searchbar;