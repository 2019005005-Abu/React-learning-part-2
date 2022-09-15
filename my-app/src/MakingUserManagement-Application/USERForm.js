import React,{useState,useEffect} from 'react'
import PropType from "prop-types"

const USERForm = ({handleSubmitData,btnText,selectedUser}) => {
  const [user,setUser]=useState({
    userName:"",
    email:" ",
    password:" ",

  });
 useEffect(()=>{
 setUser({
  selectedUser:selectedUser.userName,
  email:selectedUser.email
 })
 },[selectedUser])
  const HandleChange=(event)=>{
    const selectedField=event.target.value;
    const selectedValue=event.target.value;
    setUser((prevstate)=>{
      return{
        ...prevstate,[selectedField]:selectedValue
      }
    })
  }

 const HandleSubmit=(event)=>{
   event.preventDefault();
   handleSubmitData(user);
   setUser({
    userName:" ",
    email:" ",
    password:" ",
   })
 }

  return (
    <form onSubmit={HandleSubmit}>
      <div className="field-group">
       <label htmlFor="username">Username</label>
       <input type="text"  
       id="username" 
       name="username" 
       value={user.userName}
       onChange={HandleChange}
       required
       />
      </div>

      <div className="field-group">
       <label htmlFor="username">Username</label>
       <input type="text"  
       id="username" 
       name="username" 
       value={user.userName}
       onChange={HandleChange}
       required
       />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  )
}
USERForm.defaultProps={
  selectedUser:{
    userName:"",
    email:" "
  }
}

export default USERForm
