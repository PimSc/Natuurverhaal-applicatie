import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContextProvider.jsx";


// Deze hook haalt de profiel foto op en geeft deze door aan de andere pagina`s waar nodig



function useProfileImage() {
    const { user } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState(null);
    const [download, triggerDownload] = useState(false);




    useEffect(() => {
        async function getImage() {
            try {
                const response = await axios.get(`http://localhost:8080/image/${user.username}`, {

                });
            } catch (error) {
                console.error(error);
            }
        }
        void getImage();
    }, [user.username, download]);

    return { profileImage };
}

export default useProfileImage;