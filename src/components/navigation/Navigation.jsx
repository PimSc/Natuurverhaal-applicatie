import './Navigation.css';
import { NavLink } from 'react-router-dom';
// import menuIcon from "./../../assets/burgerMenuIcon.png"


function Navigation() {



    return (
        <div className="nav-container-main">


            {/*Start main navigation bar*/}
            <nav className="mainNav">
                        <ul>
                            <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Homemain</NavLink></li>
                            <li><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink></li>
                            {/*<li><NavLink to="/Blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink></li>*/}
                            <li><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>
                            <li><NavLink to="/Account" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Account</NavLink></li>
                            <li><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>
                            <form action="/search" method="get">
                                <input type="text" name="query" placeholder="Zoek..."/>
                            </form>
                        </ul>
                    </nav>
            {/*End main navigation bar*/}





            {/*Start phone navigation bar*/}
            <nav className="phoneNav">
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Hometel</NavLink></li>
                    <li><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink></li>
                    {/*<li><NavLink to="/Blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink></li>*/}
                    <li><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>
                    <li><NavLink to="/Account" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Account</NavLink></li>
                    <li><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>

                    <form action="/search" method="get">
                        <input type="text" name="query" placeholder="Zoek..."/>
                    </form>
                </ul>
            </nav>
            {/*End phone navigation bar*/}



            {/*/!*Start phone navigation bar*!/*/}
            {/*<nav className="phoneNav">*/}
            {/*    <ul>*/}
            {/*        <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>*/}
            {/*        <li><NavLink to="/OnsVerhaal" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Ons verhaal</NavLink></li>*/}
            {/*        /!*<li><NavLink to="/Blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink></li>*!/*/}
            {/*        <li><NavLink to="/Excursies" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Excursies</NavLink></li>*/}
            {/*        <li><NavLink to="/Account" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Account</NavLink></li>*/}
            {/*        <li><NavLink to="/Contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact</NavLink></li>*/}

            {/*        <form action="/search" method="get">*/}
            {/*            <input type="text" name="query" placeholder="Zoek..."/>*/}
            {/*        </form>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            {/*/!*End phone navigation bar*!/*/}

        </div>
    );
}

export default Navigation;