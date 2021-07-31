import campylogo from './CampyLogo/campy.png'
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
      };

    return (
            <div className="topnav">
            <img src={campylogo} href="/landing" alt="Camp fire logo"></img>
            <div className={isActive ? "change" : "hamburger"} onClick={handleToggle}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {isActive ? <>
                <Link className="a" to="/" onClick={handleToggle}>Home</Link>
                <Link className="b" to="/list" onClick={handleToggle}>Make a List</Link>
                <Link className="c" to="/wildfires" onClick={handleToggle}>Wildfires</Link>
                <Link className="d" to="/about" onClick={handleToggle}>About</Link>
                </> : null
                
            }
        </div>  
    )
}

export default Nav
