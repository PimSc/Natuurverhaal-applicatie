import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContextProvider.jsx";
import axios from "axios";


function useUserBulletinBoards() {
    const [bulletinBoardPostUser, setBulletinBoardPost] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/bulletin-boards/${user.username}`);
                setBulletinBoardPost(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchData();
    }, []);

    return { bulletinBoardPostUser };
}

export default useUserBulletinBoards;