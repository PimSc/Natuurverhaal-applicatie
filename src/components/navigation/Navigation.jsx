import './Navigation.css';
import {Link, NavLink} from 'react-router-dom';

import {useContext} from 'react';
import {AuthContext} from "../../context/AuthContextProvider";
import Searchbar from "../searchbar/Searchbar.jsx";

function Navigation() {

    const {isAuth, user, logout} = useContext(AuthContext);


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
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink>
                        </li>

                        <li><NavLink to="/Excursies"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink>
                        </li>

                        <Searchbar/>

                        <li><NavLink to="/Prikbord"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Prikbord</NavLink>
                        </li>


                        <li>
                            <ul>
                                <div className="dropdown">
                                    {!isAuth && (
                                        <button className="dropbtn">Account</button>
                                    )}

                                    {isAuth && (
                                        <button className="dropbtn" id="dropdownWhileLogin">Account</button>
                                    )}

                                    <div className="dropdown-content">
                                        {!isAuth && (<li><Link to="/login">Login</Link></li>)}
                                        {isAuth && (<>
                                                <li><Link to="/mijnBlogs">Mijn blogs</Link></li>
                                                <li><Link to="/mijnprikbord">Mijn prikbord</Link></li>
                                                <li><Link to="/ProfileEdit">Profiel</Link></li>


                                                {user && user.role === 'ROLE_ADMIN' && (
                                                    <li>
                                                        <Link
                                                            to="/adminpanel"
                                                        >
                                                            Admin
                                                        </Link>
                                                    </li>
                                                )}


                                                <li><Link onClick={(e) => {
                                                    e.preventDefault();
                                                    logout();
                                                }} to="/">Uitloggen</Link>
                                                </li>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </ul>
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
                            <li>
                                <NavLink to="/"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/OnsVerhaal"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons
                                    verhaal</NavLink>
                            </li>

                            <li>
                                <NavLink to="/Excursies"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink>
                            </li>

                            <li>
                                <NavLink to="/Prikbord"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Prikbord</NavLink>
                            </li>

                            {!isAuth &&
                                <li>
                                    <NavLink to="/login"
                                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink>
                                </li>
                            }

                            <li>
                                <NavLink to="/Contact"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink>
                            </li>


                            {isAuth && (<>
                                    <li>
                                        <NavLink to="/mijnBlogs"
                                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Mijn
                                            blogs</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/mijnprikbord"
                                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Mijn
                                            prikbord</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/ProfileEdit"
                                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Profiel</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/editblog"
                                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Edit
                                            blog</NavLink>
                                    </li>


                                    {user && user.role === 'ROLE_ADMIN' && (
                                        <li>
                                            <NavLink
                                                to="/adminpanel"
                                                className={({isActive}) =>
                                                    isActive === true ? 'active-link' : 'default-link'
                                                }
                                            >
                                                Admin
                                            </NavLink>
                                        </li>
                                    )}


                                    <li><Link onClick={(e) => {
                                        e.preventDefault();
                                        logout();
                                    }} to="/">Uitloggen</Link>
                                    </li>
                                </>
                            )}
                        </nav>
                    </aside>

                </div>
            </div>
        </>
    );
}

export default Navigation;