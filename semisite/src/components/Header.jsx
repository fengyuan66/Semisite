import { Link } from 'react-router-dom'
import { NavLink, useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import '../css/header.css'
import logo from '../assets/SEMI_logo.svg'
import txtlogo from '../assets/SEMI_txt.svg'

function Header(){
    const navRef = useRef(null) //navRef of obj type ref. Represents the element (e.g., NavLink) within Nav
    const [indicator, indicatorOffset] = useState({left: 0, width: 0}) //array represents direct indicator position and offset. Passed from direct position and offset of the nav bar element
    const location = useLocation()  //currentURL
    

    useEffect(() => {
        const activeLink = navRef.current.querySelector('.active') //currently selected link
        if (activeLink){
            indicatorOffset({ left: activeLink.offsetLeft, width: activeLink.offsetWidth })
        }
        else{
            indicatorOffset({ left: 0, width: 0})
        }
    }, [location.pathname]) //whenever the current location (URL) changes, re-render (adjust and update) the indicator's (pointer's) position and offset according to the current link's

    return(
        <div className="header">
            
            <div className={`logogroup ${location.pathname === '/' ? 'home' : ''}`}>
                <img className="txtlogo" src={txtlogo} alt="appearing-on-hover SEMI text logo" height="40" />
                <Link to="/" className="logolink">
                    <img src={logo} alt="SEMI logo" height="40" />
                </Link>
            </div>
            <nav ref = {navRef}>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                Projects
                </NavLink>
                <NavLink to="/newsletter" className={({ isActive }) => isActive ? 'active' : ''}>
                Newsletter
                </NavLink>
                <NavLink to="/employees" className={({ isActive }) => isActive ? 'active' : ''}>
                Employees
                </NavLink>

                {/* TODO: Make contact us a separate button! */}
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Connect
                </NavLink>

                <span className="indicator" style={{ left: indicator.left, width: indicator.width }} />

            </nav>
        </div>
    )
}

export default Header