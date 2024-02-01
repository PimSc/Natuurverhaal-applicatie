import './TestPage.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";







function TestPage() {




    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
    <div>
        <Link to="/testpage2"><button>test page1</button></Link>

        <h1>User List</h1>
        <ul><p>
            {users.map(user => (
                <>
                    <li key={user.username}>{user.username}</li>
                <li key={user.username}>{user.email}</li>
                    <li key={user.username}>{user.password}</li>


        </>
            ))}


        </p>
        </ul>
    </div>
);
}

export default TestPage;


