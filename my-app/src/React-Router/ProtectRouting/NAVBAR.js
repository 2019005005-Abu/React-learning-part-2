import React from 'react'
import {Link} from "react-router-dom";

const NAVBAR = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/addblog">Add-Blog</Link>
    </nav>
  )
}

export default NAVBAR
