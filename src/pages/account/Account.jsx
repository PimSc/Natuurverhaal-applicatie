import { useState } from 'react';
import './Account.css';
import LoginScreen from '../../components/loginScreen/LoginScreen.jsx';
import RegisterScreen from '../../components/registerScreen/RegisterScreen.jsx';

function Account() {

    // Code for switch between inloggen and registeren start
    const [activeButton, setActiveButton] = useState('login');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    // Code for switch between inloggen and registeren end






    return (
        <>
        <div className="outer-content-container">
            <div className="innerContentContainerColumn">
                <div className="accountPageButtonBox2">
                    <button
                        // handleButtonClick is for changing the login and register button
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

export default Account;
