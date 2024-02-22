import './Searchbar.css';
import {useContext} from 'react';
import SearchContext from './../../context/SearchContext.jsx';


const Searchbar = () => {
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (


        <>
            {(window.location.pathname === "/" || window.location.pathname === "/mijnBlogs") ? (
                <div className="searchbarBlogOvervieuwVisible">
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
            ) : (
                <div className="searchbarBlogOvervieuwHidden">
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
            )}


        </>

    );
};

export default Searchbar;