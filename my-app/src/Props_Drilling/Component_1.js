import React,{useState} from 'react'
import Component_2 from './Component_2'
import { UserContext } from './USERCONTEXT'
const Component_1 = () => {
const [User, setUser] = useState({id:101,name:"Abu Al Shahriar Rifat"});
const [text,setText]=useState("Hello I am Abu Al Shahriar Rifat");
const [text1,setText2]=useState("I am Working as a software Enginner at Google")
  return (
     <UserContext.Provider value={{
        User,text,text1
     }}>
      <Component_2/>
      </UserContext.Provider>
  )
}

export default Component_1
