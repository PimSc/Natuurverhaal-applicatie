import './Searchbar.css';
import { useContext } from 'react';
import SearchContext from './../../context/SearchContext.jsx';
import { useLocation } from "react-router-dom";

function Searchbar() {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Haal de huidige locatie op met behulp van useLocation() van react-router-dom.
    const location = useLocation();

    // bepaalt op welke pagina`s het zoekbalk component zichtbaar is
    const allowedPages = ['/', "/myBlogs"];
    const showSearchBar = allowedPages.includes(location.pathname);


    return (
        <>

            {showSearchBar && (
                <div id="searchbarBlogOvervieuw">
                    <form>
                        <input className="searchBar"
                               type="text"
                               name="query"
                               placeholder="Zoek..."
                               value={searchQuery}
                               onChange={handleChange}/>
                    </form>
                </div>
            )}


        </>
    );
}

export default Searchbar;




// import './Searchbar.css';
// import { useContext } from 'react';
// import SearchContext from './../../context/SearchContext.jsx';
// import { useLocation } from "react-router-dom";
//
// function Searchbar() {
//     const { searchQuery, setSearchQuery } = useContext(SearchContext);
//     const handleChange = (event) => {
//         setSearchQuery(event.target.value);
//     };
//
//     // Haal de huidige locatie op met behulp van useLocation() van react-router-dom.
//     const location = useLocation();
//
//     // bepaalt op welke pagina`s het zoekbalk component zichtbaar is
//     const allowedPages = ['/', "/myBlogs"];
//     const showSearchBar = allowedPages.includes(location.pathname);
//
//
//     return (
//         <>
//
//             {showSearchBar && (
//                 <div id="searchbarBlogOvervieuw">
//                     <form>
//                         <input className="searchBar"
//                                type="text"
//                                name="query"
//                                placeholder="Zoek..."
//                                value={searchQuery}
//                                onChange={handleChange}/>
//                     </form>
//                 </div>
//             )}
//
//
//         </>
//     );
// }
//
// export default Searchbar;