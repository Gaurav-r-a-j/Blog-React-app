import React, { useState } from 'react'
import { useEffect } from 'react';
import "./sidebar.css"
import axios from "axios"
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])


    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src="https://images.pexels.com/photos/7925859/pexels-photo-7925859.jpeg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    {cats.map((c, index) => (
                        <Link to={`/?cat=${c.name}`}>
                            <li key={index} className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>

                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar