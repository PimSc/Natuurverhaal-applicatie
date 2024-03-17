import { useEffect, useState } from 'react';
import axios from 'axios';
import './upvote.css';
import { useContext } from 'react';
import {AuthContext} from "../../context/AuthContextProvider.jsx";

function UpVote({ blogId }) {
    const [upvotes, setUpvotes] = useState(0);
    const token = localStorage.getItem('token');
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchUpvotes = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/blog-posts/${blogId}/upvotes`);
                setUpvotes(response.data);
            } catch (error) {
                console.error('Error fetching upvotes', error);
            }
        };

        fetchUpvotes();
    }, [blogId]);

    const handleUpvote = async () => {
        const inputUpvoteDto = {
            username: `${user.username}`,
            blogPostId: blogId,
        };

        try {
            await axios.post('http://localhost:8080/upvotes', inputUpvoteDto, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // After the POST request, make a GET request to fetch the actual new data
            const response = await axios.get(`http://localhost:8080/blog-posts/${blogId}/upvotes`);
            // Update the state with the actual number of upvotes returned from the server
            setUpvotes(response.data);
        } catch (error) {
            console.error('Error upvoting blog post', error);
        }
    };








    return (
        <>


            <input type="checkbox" id="checkbox" onChange={handleUpvote}/>
            <label htmlFor="checkbox">
                <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round"
                     strokeLinejoin="round">
                    <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
                        <path
                            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                            id="heart"/>
                        <circle className="circle" cx="29.5" cy="29.5" r="1.5" stroke="#CD85E7" strokeWidth="0 "/>

                        <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                        </g>

                        <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                        </g>

                        <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                        </g>

                        <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                        </g>
                    </g>
                </svg>
                <div className="numbers">
                    <a className="num1">{upvotes}</a>
                    <a className="num2">{upvotes}</a>
                </div>
            </label>
        </>
    );
}

export default UpVote;