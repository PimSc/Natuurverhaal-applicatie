import React, { createContext, useState, useEffect } from 'react';
import useBlog from "../Hooks/useAllBlogs.jsx";

const SearchContextProvider = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <SearchContextProvider.Provider value={{searchQuery, setSearchQuery, handleChange}}>
            {children}
        </SearchContextProvider.Provider>
    );
};

export default SearchContextProvider;






















//
//
// import React, { createContext, useState, useEffect } from 'react';
// import useBlog from "../hooks/useAllBlogs.jsx";
//
// const SearchContextProvider = createContext();
//
// export const SearchProvider = ({ children }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//
//
//     // const { blogPostsAll } = useBlog();
//
//     // const [filteredPosts, setFilteredPosts] = useState(blogPostsAll);
//
//     // useEffect(() => {
//     //     const filtered = blogPostsAll.filter(post =>
//     //         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     //         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     //         post.username.toLowerCase().includes(searchQuery.toLowerCase())
//     //     );
//     //     setFilteredPosts(filtered);
//     // }, [searchQuery, blogPostsAll]);
//
//     const handleChange = (event) => {
//         setSearchQuery(event.target.value);
//     };
//
//     return (
//         <SearchContextProvider.Provider value={{searchQuery, setSearchQuery, handleChange}}>
//             {children}
//         </SearchContextProvider.Provider>
//     );
// };
//
// export default SearchContextProvider;
