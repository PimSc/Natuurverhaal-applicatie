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

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            // log het resultaat in de console
            console.log(response.data);

            // geef de JWT token aan de login-functie van de context mee
            login(response.data.accessToken);
            navigate('/')

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // async function fetchData() {
    //     try {
    //         const response = await axios.get('http://localhost:8080/authenticated');
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Inloggen</h1>
                {/*<p>{session?.username} {userRoles}</p>*/}
                <p>Welkom terug</p>
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
                                autoComplete="on"/>
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
                                required/>
                        </div>

                        {error && <p className="error">Combinatie van username en wachtwoord is onjuist</p>}

                        <button className="registerButton2" type="submit">Inloggen</button>
                    </div>
                </div>
                <hr/>
                {/*<p>Wachtwoord  <Link to="/TermsAndPrivacy">resetten</Link></p>*/}
            </form>

        </>
    );
}

export default LoginScreen;