import React, { createContext, useState, useEffect } from 'react';
import useBlog from "../hooks/useBlogAll.jsx";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { blogPostsAll } = useBlog();
    const [filteredPosts, setFilteredPosts] = useState(blogPostsAll);


    useEffect(() => {
        const filtered = blogPostsAll.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [searchQuery, blogPostsAll]);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery, handleChange, filteredPosts }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;


// useEffect(() => {
//     const filtered = blogPostsAll.filter(post =>
//         post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (Array.isArray(post.categories) && post.categories.some(category =>
//             category.toLowerCase().includes(searchQuery.toLowerCase()))) ||
//         (post.yesNoOption ? 'yes' : 'no').includes(searchQuery.toLowerCase())
//
//     );
//     setFilteredPosts(filtered);
// }, [searchQuery, blogPostsAll]);
