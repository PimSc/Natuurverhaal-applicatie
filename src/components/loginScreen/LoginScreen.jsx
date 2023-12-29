import './LoginScreen.css';
import {Link} from "react-router-dom";

function LoginScreen() {



return (
<>
    <form>
        <h1>login</h1>
        <p>Welkom terug</p>
        <hr />
        <div className="loginOuterContainer">
            <div className="loginInnerContainer">

                {/*<div className="inputField">*/}
                {/*    <div className="labelTextLeft">*/}
                {/*        <label htmlFor="email"><b>Email</b></label>*/}
                {/*    </div>*/}
                {/*    <input type="text" placeholder="Enter Email" name="email" id="email" required />*/}
                {/*</div>*/}

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



                <button className="loginButton2" type="button" >Inloggen</button>

            </div>
        </div>

        <hr />

        <p>Wachtwoord  <Link to="/TermsAndPrivacy">resetten</Link><p/>
            {/* <button type="submit" className="registerbtn">Register</button> */}</p>

    </form>

</>
);
}

export default LoginScreen;