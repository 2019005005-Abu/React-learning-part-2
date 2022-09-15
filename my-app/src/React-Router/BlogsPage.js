import React,{useState} from 'react'
import Data, { blogsData } from '../Data/Data'
import {Link,useLocation} from "react-router-dom";
import '../StyleCom/NavStyle.css'
console.log(blogsData);
export default function BlogsPage(){
   const [blogspot,setBlogSpot]=useState(blogsData);
   console.log(blogsData);
   const truncateString=(str,number)=>{
    if(str.length>number){
      return str.slice(0,number)+ "  "
    }else{
      return str;
    }
   }

   return(
    <div>
       <h1>BlogSpot Page</h1>
       <section>
          {
            blogsData.map((blog)=>{
            const {title,desc,body,id}=blog
             return(
              <article key={id}>
               <h1>{title}</h1>
               <p>{desc}</p>
               <p>{body}</p>
               <p>{truncateString(body,100)}</p>
               <Link to={title} 
               state={{id,title,body}}>Learn More</Link>
              </article>
             )
            })
          }
       </section>
    </div>
   )
  }


