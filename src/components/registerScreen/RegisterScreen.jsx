import { useState } from 'react';
import './RegisterScreen.css';

import AuthService from "../../services/auth.service";

function RegisterScreen() {

    const [responseMessage, setResponseMessage] = useState("");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();

        AuthService.register(
            username,
            email,
            password
        ).then(
            response => {
                setResponseMessage(response?.data?.message)
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                console.error(resMessage)
            }
        );
    }

    return (
        <>
            {!!responseMessage && (
                <p>{responseMessage}</p>
            )}
            {!responseMessage && (
                <form onSubmit={handleRegister}>
                    <h1>Registreren</h1>
                    <p>Vul de velden in om een account aan te maken</p>
                    <hr />
                    <div className="loginOuterContainer">
                        <div className="loginInnerContainer">

                            <div className="inputFieldMargin">
                                <div className="labelTextLeft">
                                    <label htmlFor="email"><b>Email</b></label>
                                </div>
                                <input type="email" onChange={onChangeEmail} placeholder="E-mail" name="email" id="email" required autoComplete="on" />
                            </div>

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

                            {/* <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label htmlFor="herhaal-wachtwoord"><b>Herhaal wachtwoord</b></label>
                            </div>
                            <input type="password" placeholder="Herhaal wachtwoord" name="herhaal-wachtwoord" id="herhaal-wachtwoord" required />
                        </div> */}

                            <button className="registerButton2" type="submit">Registreren</button>

                        </div>
                    </div>
                    <hr />
                    {/*<p>Door een account te maken zit je voor eeuwig vast aan onze <Link to="/TermsAndPrivacy">Voorwaarden</Link></p>*/}
                </form>
            )}
        </>
    );
}

export default RegisterScreen;