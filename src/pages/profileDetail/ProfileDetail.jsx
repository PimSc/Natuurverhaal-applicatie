import './ProfileDetail.css';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import axios from 'axios';


function ProfileDetail() {

    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);




    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:8080/authenticated', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])


    return (
        <>
            {user &&
                <div className="outer-content-container-column">
                    <h1>Profielpagina</h1>
                    <section>
                        <h2>Gegevens</h2>
                        <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>




                    </section>

                    {/*Als er keys in ons object zitten hebben we data, en dan renderen we de content*/}
                    {/*{Object.keys(profileData).length > 0 &&      }*/}
                    <p><strong>User role:</strong> {user.role} </p>


                    <p>Terug naar de <Link to="/">Homepagina</Link></p>
                </div>
            }
        </>
    );
}

export default ProfileDetail;