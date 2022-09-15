import React, { memo,useMemo } from 'react'
const Message =({numberOfMessage,onHandleIncrement}) => {
    console.log(`Message is Rendering`);
    // let number=0;
    //  for(let index=0;index<5000;index++){
    //     number++
    //  }
     const calculatedNumber=useMemo(()=>{
     let number=0;
     for(let index=0;index<5000000;index++){
        number++;
     }
     return number
    },[])

    return (
      <div>
        <h2>Number={calculatedNumber}</h2>
        <p>Send Message && Message is Rendering {numberOfMessage} times</p>
        <button onClick={onHandleIncrement}>Increment Message Number</button>
      </div>
    )
  }

export default memo(Message);
