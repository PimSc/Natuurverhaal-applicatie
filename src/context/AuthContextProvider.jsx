import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import LoadingGif from "../../public/assets/icons/LoadingGif.gif"


// Ik heb hier expres de comments laten staan

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    // MOUNTING EFFECT
    useEffect(() => {
        // haal de JWT op uit Local Storage
        const token = localStorage.getItem('token');

        // als er WEL een token is, haal dan opnieuw de gebruikersdata op
        if (token) {
            const decoded = jwtDecode(token);
            fetchUserData(decoded.sub, token);
        } else {
            // als er GEEN token is doen we niks, en zetten we de status op 'done'
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        // zet de token in de Local Storage
        localStorage.setItem('token', JWT);
        // decode de token zodat we de ID van de gebruiker hebben en data kunnen ophalen voor de context
        const decoded = jwtDecode(JWT);

        // geef de ID, token en redirect-link mee aan de fetchUserData functie (staat hieronder)
        fetchUserData(decoded.sub, JWT);
        fetchUserData(decoded.sub, JWT, '/');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Gebruiker is uitgelogd!');
        navigate('/login');
    }

    // Omdat we deze functie in login- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
    async function fetchUserData(id, token, redirectUrl) {
        try {
            // haalt gebruikersdata op met de token en id van de gebruiker
            const token = localStorage.getItem("token")
            const result = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            // zet de gegevens in de state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    role: result.data.authorities[0].authority,
                },
                status: 'done',
            });

            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
            // als we de navigate in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            // ging er iets mis? dan Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <div className="loadingGif"> <img src={LoadingGif} alt="loading Gif"/></div>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;