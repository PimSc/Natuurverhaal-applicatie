import {useEffect, useState} from "react";
import axios from "axios";

// Deze hook haalt de BulletinBoard (prikbord) posts op en geeft deze door aan de andere pagina`s waar nodig

function useAllBulletinBoards() {
    const [bulletinBoardsAll, setBulletinBoards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/bulletin-boards');
                setBulletinBoards(response.data);
            } catch (error) {
                console.error('Error fetching bulletinBoard:', error);
            }
        };

        fetchData();
    }, []);

    return { bulletinBoardsAll };
}


export default useAllBulletinBoards;