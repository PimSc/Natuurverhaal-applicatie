import './RegisterScreen.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

            // Let op: omdat we geen axios Canceltoken gebruiken zul je hier een memory-leak melding krijgen.
            // Om te zien hoe je een canceltoken implementeerd kun je de bonus-branch bekijken!

            // als alles goed gegaan is, linken we door naar de login-pagina

            console.log(response.data);
            // navigate('/login');
            // navigate('/')
            window.location.reload(false);
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    // async function fetchData() {
    //     try {
    //         const response = await axios.get('http://localhost:8080/users');
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }




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
                                <div className="labelTextLeft">
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
                                    required
                                />
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
                                />
                            </div>

                            {error && <p className="error">Dit account bestaat al. Probeer een andere gebruikersnaam.</p>}

                            <button
                                className="registerButton2"
                                disabled={loading}
                                type="submit">Registreren</button>

                        </div>
                    </div>
                    <hr/>
                </form>
        </>
    );
}

export default RegisterScreen;