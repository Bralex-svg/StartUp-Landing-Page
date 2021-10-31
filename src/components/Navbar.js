import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
// import { Button } from './Button';
import Bolt from  '../images/Bolt_logo.png'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
     <>
     <nav className="navbar">
         <div className="navbar-container">
        <Link to = '/' className = "navbar-logo">
       <img src =  {Bolt} alt="Bolt Logo" />

        </Link>
        <div className="menu-icon" onClick = {handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
         <li className = "nav-item">
         <Link to = '/services' className = 'nav-links' onClick = {closeMobileMenu}>
         Ride 
         </Link>
         </li>
         <li className = "nav-item">
         <Link to = '/about' className = 'nav-links' onClick = {closeMobileMenu}>
         Become a driver
         </Link>
         </li>
         <li className = "nav-item">
         <Link to = '/blog' className = 'nav-links' onClick = {closeMobileMenu}>
         Fleet
         </Link>
         </li>
         <li className = "nav-item">
         <Link to = '/blog' className = 'nav-links' onClick = {closeMobileMenu}>
         Business
         </Link>
         </li>
         <li className = "nav-item">
         <Link to = '/blog' className = 'nav-links' onClick = {closeMobileMenu}>
         Food
         </Link>
         </li>
         <li className = "nav-item">
         <Link to = '/blog' className = 'nav-links' onClick = {closeMobileMenu}>
         Cities
         </Link>
         </li>
        
        
        </ul>
        {/* <Link to = "/contact">
        {button && <Button className = "Mybtn" buttonStyle = 'btn--outline'>Sign up or Log in </Button>}
        </Link> */}
   
         </div>
     </nav>
     </>
    )
}

export default Navbar