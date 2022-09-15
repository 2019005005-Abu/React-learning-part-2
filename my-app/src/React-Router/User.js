import React,{useState} from 'react';
import {useParams,useSearchParams} from "react-router-dom";
export default function User(){
    const [searchParams,setsearchParams]=useSearchParams();
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const InputChange=()=>{

    }
     const HandleSubmit=(e)=>{
      e.preventDefault();
      console.log("submitted")
      setsearchParams({
        name:name,
        age:age,
      })
     }
    return(
        <div>
         <form action='' onSubmit={HandleSubmit}>
         <div>
         <legend>Enter Name:</legend>
         <input type="text" value={name} 
         onChange={(e)=>{
          setName(e.target.value)
         }}/>

         <div>
         <legend>Enter Age:</legend>
         <input type="text" value={age} 
         onChange={(e)=>{
          setAge(e.target.value)
         }}/> 
         </div>

         </div>
        
         <button type="submit">Find User</button>
         </form>
        
        <p>User:{searchParams.get("id")}</p>
        <p>Name:{searchParams.get("name")}</p>
        <p>Age:{searchParams.get("age")}</p>
        </div>
    )
}
