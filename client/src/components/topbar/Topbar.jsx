import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"
const Topbar = () => {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/write'>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className='topImg'
                            src="https://sstarx.in/gauravpic1.jpeg" alt="" />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'><Link to='/login'>LOGIN</Link>
                            </li>

                            <li className='topListItem'>
                                <Link to='/register'>REGISTER</Link>
                            </li>


                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar