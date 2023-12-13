import './Navigation.css'
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <>
    <nav>
        <div className="nav-container">
        {/*<h3>Nav component.</h3>*/}
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
            <li><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>OnderVerhaal</NavLink></li>
            <li><NavLink to="/Blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink></li>
            <li><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>
            <li><NavLink to="/Account" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Account</NavLink></li>
            <li><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>
        </ul>
        </div>
    </nav>
        </>
    )
}

export default Navigation