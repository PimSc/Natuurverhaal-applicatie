import './TestPage2.css';
import {Link} from "react-router-dom";

import {useState} from "react";
import axios from "axios";



function TestPage2() {


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const enabled = true

    async function createUser(e) {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:8080/users', {
                username: username,
                password: password,
                email: email,
                enabled : enabled
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8080/users');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }




    return (
        <>
            <Link to="/testpage">
                <button>test page2</button>
            </Link>

            <form onSubmit={(e) => createUser(e)}>
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
                                // onChange={onChangeEmail}
                                // id="email"
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
                                // onChange={onChangeUsername}
                                // id="username"
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
                                    htmlFor="wachtwoord">
                                    <b>Wachtwoord</b>
                                </label>
                            </div>
                            <input
                                // onChange={onChangePassword}
                                // id="wachtwoord"
                                placeholder="Wachtwoord"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="registerButton2" type="submit">Registreren</button>

                    </div>
                </div>
                <hr/>
                {/*<p>Door een account te maken zit je voor eeuwig vast aan onze <Link to="/TermsAndPrivacy">Voorwaarden</Link></p>*/}
            </form>

        </>
    );
}

export default TestPage2;