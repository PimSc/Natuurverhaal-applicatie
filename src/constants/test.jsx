import { useState } from 'react';

const DropdownMenu = ({ setDropdownHovered }) => {
    const dropdownLinks = [
        { path: "/dashboard", text: "Dashboard" },
        { path: "/profile", text: "profiel" },
        // Voeg meer links toe indien nodig
    ];

    return (
        <ul
            className="dropdown-menu"
            onMouseEnter={() => setDropdownHovered(true)}
            onMouseLeave={() => setDropdownHovered(false)}
        >
            {dropdownLinks.map((link, index) => (
                <li key={index}><NavLink to={link.path}>{link.text}</NavLink></li>
            ))}
        </ul>
    );
};

const Navigation = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownHovered, setDropdownHovered] = useState(false);

    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <div
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="login-container"
                    >
                        <NavLink to="/Login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                            Login
                        </NavLink>
                        {(isDropdownOpen || isDropdownHovered) && <DropdownMenu setDropdownHovered={setDropdownHovered} />}
                    </div>
                </li>
                {/* ... rest van je navigatielinks ... */}
            </ul>
        </nav>
    );
};
