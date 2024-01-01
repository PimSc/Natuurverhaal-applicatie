import './Navigation.css'
import {NavLink} from "react-router-dom";



// Navigation component is imported directly into App.jsx




function Navigation() {

    return (

        <div className="nav-container-main" >
            <nav>
        <ul>
            <li className="mainLink" ><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
            <li className="mainLink"><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink></li>
            {/*<li><NavLink to="/Blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink></li>*/}
            <li className="mainLink"><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>
            <li className="mainLink"><NavLink to="/Account" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Account</NavLink></li>
            <li className="mainLink"><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>
            <form action="/search" method="get">
                <input type="text" name="query" placeholder="Zoek..."/>
            </form>
        </ul>
            </nav>


        </div>
    )
}

export default Navigation