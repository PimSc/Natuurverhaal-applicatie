import {useState, useContext} from 'react';
import './LoginScreen.css';

import {AuthContextData} from "../../context/AuthContextProvider";
import axios from "axios";

function LoginScreen() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8080/authenticated');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <form onSubmit={(e) => loginUser(e)}>
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
                                placeholder="Gebruikersnaam" name="username"
                                id="username"
                                required autoComplete="on"/>
                        </div>

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label htmlFor="wachtwoord"><b>Wachtwoord</b></label>
                            </div>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                name="wachtwoord"
                                id="wachtwoord"
                                required/>
                        </div>

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