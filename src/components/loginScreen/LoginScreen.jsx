import './LoginScreen.css';
import {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import axios from "axios";
import {useNavigate} from "react-router-dom";


function LoginScreen() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            // geef de JWT token aan de login-functie van de context mee
            login(response.data.jwt);
            // navigate('/')

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Inloggen</h1>
                {/*<p>{session?.username} {userRoles}</p>*/}
                {/*<p>Welkom terug   {user && <>{user.username}</>}</p>*/}

                {user ? (
                    // Als user bestaat, geef dit weer
                    <div>Ingelogd als {user.username}</div>
                ) : (
                    // Als user niet bestaat, geef dit weer
                    <div><p>U bent niet ingelogd</p></div>
                )}

                <hr/>
                <div className="loginOuterContainer">
                    <div className="loginInnerContainer">

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label htmlFor="username"><b>Gebruikersnaam</b></label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Gebruikersnaam"
                                name="username"
                                value={username}
                                id="username"
                                required
                                autoComplete="on"
                            minLength={3}
                            maxLength={15}
                            />
                        </div>

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label htmlFor="wachtwoord"><b>Wachtwoord</b></label>
                            </div>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="wachtwoord"
                                name="wachtwoord"
                                value={password}
                                id="wachtwoord"
                                required
                                autoComplete="on"
                                pattern=".*[!@#$%^&*].*"
                                minLength={8}
                            />
                        </div>

                        {error && <p className="error">Combinatie van username en wachtwoord is onjuist</p>}

                        <button className="simpleButtons margin20PxBottom" type="submit">Inloggen</button>
                    </div>
                </div>
                <hr/>
            </form>

        </>
    );
}

export default LoginScreen;