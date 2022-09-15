import React,{useState} from 'react'
import Users from './Users'

const PropsType = () => {
  const [userName,setUserName] = useState("Abu Al Shahriar Rifat");
  const [userPassword,setUserPassword]=useState("2019005005");
  const [user,setUser]=useState({
    id:2019005005,
    name:"Abu Al Shahriar Rifat"
  })
  
  return (
    <div>
       This is from Props-Type
       <Users 
       userName={userName}
       userId={userPassword}
        user={user}/>
    </div>
  )
}

export default PropsType
