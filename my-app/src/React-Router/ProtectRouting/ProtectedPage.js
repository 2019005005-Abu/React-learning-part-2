import React from 'react'
import {Navigate} from "react-router-dom"
const ProtectedPage = ({isLoggedIn,children}) => {
  
    if(!isLoggedIn){
        return <Navigate replace/>
    }else{
        return children;
    }
  
}

export default ProtectedPage
