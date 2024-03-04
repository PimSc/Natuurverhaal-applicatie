import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import AuthContextProvider from "./context/AuthContextProvider";
import {SearchProvider} from "./context/SearchContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    //  <React.StrictMode>
    <Router>
        <AuthContextProvider>
            <SearchProvider>
                <App/>
            </SearchProvider>
        </AuthContextProvider>
    </Router>
    // </React.StrictMode>,
)
