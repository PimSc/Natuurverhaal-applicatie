import {useState, useContext} from 'react';
import './LoginScreen.css';

import {AuthContextData} from "../../context/AuthContextProvider";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            {/*<form onSubmit={handleLogin}>*/}
            <form>
                <h1>Inloggen</h1>
                {/*<p>{session?.username} { userRoles }</p>*/}
                <p>Welkom terug</p>
                <hr/>
                <div className="loginOuterContainer">
                    <div className="loginInnerContainer">


                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label
                                    htmlFor="username">
                                    <b>Gebruikersnaam</b>
                                </label>
                            </div>
                            <input
                                placeholder="Gebruikersnaam"
                                type="text"
                                name="username"
                                // value={username}
                                // onChange={onChangeUsername}
                                autoComplete="on"
                                required
                            />
                        </div>


                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label
                                    htmlFor="wachtwoord">
                                    <b>Wachtwoord</b>
                                </label>
                            </div>
                            <input
                                placeholder="Wachtwoord"
                                type="password"
                                name="password"
                                // value={password}
                                // onChange={onChangePassword}
                                required
                            />
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