import { useState } from 'react';
import './Login.css';
import LoginScreen from '../../components/loginScreen/LoginScreen.jsx';
import RegisterScreen from '../../components/registerScreen/RegisterScreen.jsx';

function Login() {
    const [activeButton, setActiveButton] = useState('login');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
        <div className="outer-content-container">
            <div className="inner-content-container-column">


                <div className="accountPageButtonBox2">
                    <button
                        // handleButtonClick for changing the login and register button
                        className={`loginButton ${activeButton === 'login' ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleButtonClick('login')}
                    >
                        Inloggen
                    </button>
                    <button
                        // handleButtonClick is for changing the login and register button
                        className={`registerButton ${activeButton === 'register' ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleButtonClick('register')}
                    >
                        Registreren
                    </button>
                </div>

                <div className="loginScreen">
                    {activeButton === 'login' && <LoginScreen />}
                    {activeButton === 'register' && <RegisterScreen />}
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
