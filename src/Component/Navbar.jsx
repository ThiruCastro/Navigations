import React from 'react'
import {  NavLink, replace } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const naivgate=useNavigate();
  return (
    <div className='navbar'>
        <div>
            <p className='logo'>LOGO</p>
        </div>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/property"><li>Property</li></NavLink>
                <NavLink to="/users"><li>Users</li></NavLink>    
            </ul>
        <div>
            <button onClick={( )=>naivgate("login",{replace:true})}>Login</button>
        </div>  
    </div>
  )
}
export default Navbar