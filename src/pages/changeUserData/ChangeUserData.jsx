import './ChangeUserData.css';
import axios from "axios";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";


function ChangeUserData() {
    const {user} = useContext(AuthContext);

    // const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const enabled = true
    const token = localStorage.getItem("token")

    async function handleForm1Submit(e) {
        e.preventDefault()

        // Change email
        try {
            const response = await axios.put(`http://localhost:8080/users/${user.username}`, {
                username: `${user.username}`,
                email: email,
                enabled: enabled
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Change password
    async function handleForm2Submit(e) {
        e.preventDefault()
        try {

            const response = await axios.put(`http://localhost:8080/users/${user.username}`, {
                username: `${user.username}`,
                password: password,
                email: `${user.email}`,
                enabled: enabled
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="outer-content-container-column">
                <div className="inner-content-container-column">
                    <div className="admindiv">

                        <article>
                        <section>
                            <form className="blackField" action="" onSubmit={handleForm1Submit}>
                                <label htmlFor="email">
                                    <p>Change email</p>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Type email and press change"
                                    autoComplete="on"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br/>
                                <button className="simpleButtons" type="submit">
                                    Change <strong>email</strong>
                                </button>
                            </form>
                        </section>

                        <section>
                            <form className="blackField" action="" onSubmit={handleForm2Submit}>
                                <label htmlFor="password">
                                    <p>Change password</p>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    name="password"
                                    id="password"
                                    placeholder="Type the password and press change"
                                    autoComplete="on"
                                    value={password}
                                    pattern=".*[!@#$%^&*].*"
                                    minLength={8}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                <br/>
                                <button className="simpleButtons" type="submit">
                                    Change <strong>password</strong>
                                </button>
                            </form>
                        </section>
                        </article>

                    </div>
                </div>
            </div>

        </>
    );
}

export default ChangeUserData;