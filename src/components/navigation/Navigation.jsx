import './Navigation.css';
import {Link, NavLink} from 'react-router-dom';



function Navigation() {

    return (
        <>
            <div className="navContainerStickyTop">  {/*Sticky container*/}

                {/*Start main navigation bar (computer screen)*/}
                <nav className="mainNav">
                    <ul>
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                        </li>
                        <li><NavLink to="/OnsVerhaal"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons
                            verhaal</NavLink></li>
                        <li><NavLink to="/Excursies"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink>
                        </li>
                        <li><NavLink to="/Prikbord"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Prikbord</NavLink>
                        </li>

                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">Account</button>
                                <div className="dropdown-content">
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/mijnBlogs">Blogs</Link></li>
                                    <li><Link to="/ProfileEdit">Profiel</Link></li>
                                    <li><Link to="/">Uitloggen</Link></li>
                                </div>
                            </div>
                        </li>

                        <li><NavLink to="/Contact"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                {/*End main navigation bar*/}

                {/*Start telephone navigation bar (phone screen)*/}

                <div className="hamburgerEffect">
                    <label className="hamburger-menu">
                        <input type="checkbox"/>
                    </label>

                    <aside className="sidebar">
                        <nav>
                            <li><NavLink to="/"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                            </li>
                            <li><NavLink to="/OnsVerhaal"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons
                                verhaal</NavLink></li>
                            <li><NavLink to="/Excursies"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink>
                            </li>
                            <li><NavLink to="/Prikbord"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Prikbord</NavLink>
                            </li>
                            <li><NavLink to="/login"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink>
                            </li>
                            <li><NavLink to="/mijnBlogs"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink>
                            </li>
                            <li><NavLink to="/ProfileEdit"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>ProfileEdit</NavLink>
                            </li>
                            <li><NavLink to="/Contact"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink>
                            </li>
                            <NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Uitloggen</NavLink>
                        </nav>
                    </aside>

                </div>
            </div>
        </>
    );
}

export default Navigation;