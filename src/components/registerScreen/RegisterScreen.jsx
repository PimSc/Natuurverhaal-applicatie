import './RegisterScreen.css';
import {Link} from "react-router-dom";

function RegisterScreen() {
return (
<>

    <form>
        <h1>Registreren</h1>
        <p>Vul de velden in om een account aan te maken</p>
        <hr />
        <div className="loginOuterContainer">
            <div className="loginInnerContainer">

                <div className="inputFieldMargin">
                    <div className="labelTextLeft">
                        <label htmlFor="email"><b>Email</b></label>
                    </div>
                    <input type="email" placeholder="E-mail" name="email" id="email" required autoComplete="on"/>
                </div>

                <div className="inputFieldMargin">
                    <div className="labelTextLeft">
                        <label htmlFor="username"><b>Gebruikersnaam</b></label>
                    </div>
                    <input type="text" placeholder="Gebruikersnaam" name="username" id="username" required autoComplete="on"/>
                </div>

                <div className="inputFieldMargin">
                    <div className="labelTextLeft">
                        <label htmlFor="wachtwoord"><b>Wachtwoord</b></label>
                    </div>
                    <input type="password" placeholder="Wachtwoord" name="wachtwoord" id="wachtwoord" required />
                </div>

                <div className="inputFieldMargin">
                    <div className="labelTextLeft">
                        <label htmlFor="herhaal-wachtwoord"><b>Herhaal wachtwoord</b></label>
                    </div>
                    <input type="password" placeholder="Herhaal wachtwoord" name="herhaal-wachtwoord" id="herhaal-wachtwoord" required />
                </div>

                <button className="registerButton2" type="submit">Registreren</button>

            </div>
        </div>
        <hr />
        {/*<p>Door een account te maken zit je voor eeuwig vast aan onze <Link to="/TermsAndPrivacy">Voorwaarden</Link></p>*/}
    </form>





</>
);
}

export default RegisterScreen;