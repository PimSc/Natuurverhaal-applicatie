import './ResetPassword.css';
import {Link} from "react-router-dom";

function ResetPassword() {

return (
<>

    <form>
        <h1>Register</h1>
        <p>wachtwoord Resetten</p>
        <hr />
        <div className="loginOuterContainer">
            <div className="loginInnerContainer">

                <div className="inputField">
                    <div className="labelTextLeft">
                        <label htmlFor="email"><b>Email</b></label>
                    </div>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />
                </div>

                <div className="inputField">
                    <div className="labelTextLeft">
                        <label htmlFor="username"><b>Gebruikersnaam</b></label>
                    </div>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required />
                </div>

                <div className="inputField">
                    <div className="labelTextLeft">
                        <label htmlFor="psw"><b>Wachtwoord</b></label>
                    </div>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                </div>

                <div className="inputField">
                    <div className="labelTextLeft">
                        <label htmlFor="psw-repeat"><b>Herhaal wachtwoord</b></label>
                    </div>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                </div>

                <button className="registerButton2" type="button" >Registeren</button>

            </div>
        </div>

        <hr />

        <p>Door een account te maken zit je voor eeuwig vast aan onze <Link to="/TermsAndPrivacy">Voorwaarden</Link><p/>
            {/* <button type="submit" className="registerbtn">Register</button> */}</p>

    </form>



</>
);
}

export default ResetPassword;