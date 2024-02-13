import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContextProvider.jsx";


function useBlog() {

    async function getBlogs() {
        try {
            const response = await axios.get(`http://localhost:8080/blog-posts/{test}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
        void getBlogs();
    }


return (
<>



</>
);
}

export default useBlog;