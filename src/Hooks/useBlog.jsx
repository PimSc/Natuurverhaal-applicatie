import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Deze hook haalt de blog posts op en geeft deze door aan de andere pagina`s waar nodig

function useBlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/blog-posts');
                setBlogPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchData();
    }, []);

    return { blogPosts };
}

export default useBlogPosts;


