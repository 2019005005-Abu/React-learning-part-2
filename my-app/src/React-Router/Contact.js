import React from 'react'
import {useNavigate} from "react-router-dom";
const Contact = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>{navigate("/home")}}>
      Contact
      <button>Go to Home Page</button>
    </div>
  )
}

export default Contact
