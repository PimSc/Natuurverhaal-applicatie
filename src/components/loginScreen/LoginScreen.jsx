import './LoginScreen.css';
import {Link} from "react-router-dom";

function LoginScreen() {



return (
<>
    <form>
        <h1>Inloggen</h1>
        <p>Welkom terug</p>
        <hr />
        <div className="loginOuterContainer">
            <div className="loginInnerContainer">

                <div className="inputFieldmargin">
                    <div className="labelTextLeft">
                        <label htmlFor="username"><b>Gebruikersnaam</b></label>
                    </div>
                    <input type="text" placeholder="Gebruikersnaam" name="username" id="username" required autoComplete="on"/>
                </div>

                <div className="inputFieldmargin">
                    <div className="labelTextLeft">
                        <label htmlFor="wachtwoord"><b>Wachtwoord</b></label>
                    </div>
                    <input type="password" placeholder="Wachtwoord" name="wachtwoord" id="wachtwoord" required />
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