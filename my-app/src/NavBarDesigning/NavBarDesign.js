import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import '.././StyleCom/NavStyle.css'
const NavBarDesign=()=>{
    return(
       <nav>
         <ul>
            <NavLink to="/home" className='nav-link'>Home</NavLink> <br/>
            <NavLink to="/contact" className='nav-link'>Contact</NavLink> <br/>
            <NavLink to="/blogspot" className='nav-link'>BlogSpot</NavLink> <br/>
         </ul>
       </nav>
    )
}
export default NavBarDesign;