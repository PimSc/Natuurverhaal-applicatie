import { useState, useContext } from 'react';
import './LoginScreen.css';

import { AuthContextData } from "../../context/AuthContextProvider";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login, userRoles, session } = useContext(AuthContextData);

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password)
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <h1>Inloggen</h1>
                <p>{session?.username} { userRoles }</p>
                <p>Welkom terug</p>
                <hr />
                <div className="loginOuterContainer">
                    <div className="loginInnerContainer">

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label htmlFor="username"><b>Gebruikersnaam</b></label>
                            </div>
                            <input type="text" onChange={onChangeUsername} placeholder="Gebruikersnaam" name="username" id="username" required autoComplete="on" />
                        </div>

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label htmlFor="wachtwoord"><b>Wachtwoord</b></label>
                            </div>
                            <input type="password" onChange={onChangePassword} placeholder="Wachtwoord" name="wachtwoord" id="wachtwoord" required />
                        </div>

                        <button className="registerButton2" type="submit">Inloggen</button>
                    </div>
                </div>
                <hr />
                {/*<p>Wachtwoord  <Link to="/TermsAndPrivacy">resetten</Link></p>*/}
            </form>

        </>
    );
}

export default LoginScreen;