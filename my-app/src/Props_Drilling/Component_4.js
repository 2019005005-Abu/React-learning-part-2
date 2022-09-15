import React,{useContext} from 'react'
import { UserContext } from './USERCONTEXT'
const Component_4 = () => {
    const  {User,text,text1}= useContext(UserContext)
    console.log(User)
  return (
    <div>
      <p>My-Id:{User.id}</p>
      <p>My-Name:{User.name}</p>
      <p>{text}</p>
      <p>{text1}</p>
    </div>
  )
}

export default Component_4
