import './Navigation.css';
import {Link, NavLink} from 'react-router-dom';
import SearchBar from "./../searchBar/SearchBar.jsx"

const handleLogout = () => {
    // Hier komt de logica om uit te loggen

    console.log('Gebruiker uitgelogd');
};


function Navigation() {

    return (
        <>
<div className="outer-content-container">
        <div className="navContainerStickyTop">  {/*Sticky container*/}

            {/*Start main navigation bar (computer screen)*/}
            <nav className="mainNav">
                        <ul>
                            <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
                            <li><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink></li>
                            <li><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>
                            <li><NavLink to="/Prikbord" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Prikbord</NavLink></li>

                            <div className="dropdown">
                                <button className="dropbtn">Account</button>
                                <div className="dropdown-content">
                                    <Link to="/login" >Login</Link>
                                    <Link to="/mijnBlogs" >Blogs</Link>
                                    <Link to="/Profiel" >Profiel</Link>
                                    <Link to="/" >Uitloggen</Link>
                                </div>
                            </div>

                            <li><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>
                            <SearchBar />  {/*Searchbar component*/}
                        </ul>
                    </nav>
            {/*End main navigation bar*/}

            {/*Start telephone navigation bar (phone screen)*/}

            <div className="hamburgerEffect">
                <label className="hamburger-menu">
                <input type="checkbox" />
                </label>

                <aside className="sidebar">
                <nav>
                    <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink></li>
                    <li><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>
                    <li><NavLink to="/Prikbord" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Prikbord</NavLink></li>
                    <li><NavLink to="/login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink></li>
                    <li><NavLink to="/mijnBlogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink></li>
                    <li><NavLink to="/Profiel" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Profiel</NavLink></li>
                    <li><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>
                    <NavLink to="/" onClick={handleLogout} className={({ isActive }) => isActive === true ? 'active-link' : 'default-link'}>Uitloggen</NavLink>
                </nav>
                </aside>

            <div className="phoneSearchBar">
                <SearchBar />  {/*Searchbar component*/}
            </div>
            </div>
        </div>
</div>
        </>
    );
}

export default Navigation;