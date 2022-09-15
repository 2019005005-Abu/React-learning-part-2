import React,{useState} from 'react'
import About from './About'
import AddBlog from './AddBlog'
import Home from './Home'
import {Routes,Route} from "react-router-dom";
import ERROR from './ERROR';
import NAVBAR from './NAVBAR';
import ProtectedPage from './ProtectedPage';

const MainRouting = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <div>
        <NAVBAR/>
        {isLoggedIn ? 
        <button onClick={()=>{
        setLoggedIn(!isLoggedIn)
        }}>Log-Out</button >:
        <button onClick={()=>{
            setLoggedIn(!isLoggedIn) 
        }}>Log-in</button>}
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/addblog" element={
         <ProtectedPage 
          isLoggedIn={isLoggedIn}>
            <AddBlog/>
         </ProtectedPage>
       }/>
       <Route path="*" element={<ERROR/>}/>
      </Routes>
    </div>
  )
}

export default MainRouting
