import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm' >React & Node</span>
            <span className='headerTitleLg'> Blog</span>
        </div>
        <img className='headerImg' src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>
  )
}

export default Header