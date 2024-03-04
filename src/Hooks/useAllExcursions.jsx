import {useEffect, useState} from "react";
import axios from "axios";


function useAllExcursions() {
    const [ExcursionsAll, setExcursions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/excursies');
                setExcursions(response.data);
            } catch (error) {
                console.error('Error fetching bulletinBoard:', error);
            }
        };

        fetchData();
    }, []);



return { ExcursionsAll }
}

export default useAllExcursions;