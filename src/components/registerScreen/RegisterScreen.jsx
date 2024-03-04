import './RegisterScreen.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";


function RegisterScreen() {
    // state voor het formulier
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const enabled = true

    // state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/users', {
                username: username,
                password: password,
                email: email,
                enabled : enabled
            });

            console.log(response.data);
            window.location.reload(false);
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Registreren</h1>
                <p>Vul de velden in om een account aan te maken</p>
                <hr/>
                <div className="loginOuterContainer">
                    <div className="loginInnerContainer">
                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label
                                    htmlFor="email">
                                    <b>Email</b>
                                </label>
                            </div>
                            <input
                                id="email"
                                placeholder="E-mail"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="on"
                                required
                            />
                        </div>

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft" id="extraMarginUsername">
                                <label
                                    htmlFor="username">
                                    <b>Gebruikersnaam</b>
                                </label>
                            </div>
                            <input
                                id="username"
                                placeholder="Gebruikersnaam"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                autoComplete="on"
                                minLength={3}
                                maxLength={15}
                                required

                            />
                            <i className="iGrey">minimaal 3 en maximaal 15 tekens</i>
                        </div>

                        <div className="inputFieldMargin">
                            <div className="labelTextLeft">
                                <label
                                    htmlFor="password">
                                    <b>Wachtwoord</b>
                                </label>
                            </div>
                            <input
                                id="password"
                                placeholder="Wachtwoord"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                pattern=".*[!@#$%^&*].*"
                                minLength={8}
                            />
                            <i className="iGrey">Wachtwoord moet minimaal 8 tekens <br/>lang zijn en een speciaal teken
                                <br/> bevatten ?=.*[!@#$%^&*]</i>
                        </div>

                        {error && <p className="error">Dit account bestaat al. Probeer een andere gebruikersnaam.</p>}

                        <button
                            className="simpleButtons simpleButtonButtonMargin"
                            disabled={loading}
                            type="submit">Registreren
                        </button>
                    </div>
                </div>
            </form>
                <hr/>
            <p> <strong>Voordelen van registeren</strong></p>
            <div className="registerAdvantagesOuterBox">
            <div className="registerAdvantagesInnerBox textStart">
                <ol>
                    <li className="liDiskDot">Blogs posten</li>
                    <li className="liDiskDot">Prikbord posten</li>
                    <li className="liDiskDot">Openbaar profiel</li>
                </ol>
            </div>
            </div>
        </>
    );
}

export default RegisterScreen;