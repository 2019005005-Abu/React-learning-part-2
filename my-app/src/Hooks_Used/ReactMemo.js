import React,{useState,useCallback} from 'react'
import Message from './Message';

const ReactMemo = () => {
    const [count,setCount]=useState(0);
    const [toggle,setToggle]=useState(false);
    console.log("application is rendering")
    const toggling= toggle ?"On":"Off";
    const handleIncrementMessage=useCallback(()=>{
        setCount(count+1) 
    },[count])
    
  return (
    <div>
    {toggling}
    <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
    <h1>Count:{count}</h1> 
    <button onClick={()=>{setCount((count)=>count+1)}}
    disabled={count==100}
    >+</button>
    <button onClick={()=>{setCount((count)=>count-1)}}
    disabled={count==0}>-</button>
     <Message numberOfMessage={count}
     onHandleIncrement={handleIncrementMessage}
     />
    </div>
   
  )
}

export default ReactMemo
