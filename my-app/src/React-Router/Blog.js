import React,{useState,useEffect} from 'react'
import {useParams,useLocation} from "react-router-dom";
import { blogsData } from '../Data/Data';
import BlogsPage from './BlogsPage';

const Blog = () => {
 const {title}=useParams();
 const location=useLocation();
 console.log(location);
 const [bodyData,setBodyData]=useState('');

 useEffect(()=>{
  const filteringData=bodyData.filter((blog)=>blog.title===title)
  setBodyData(bodyData[0].body);
 },[])
  return (
    <div>
      <h1>{title}</h1>
       <p>{bodyData.slice(0,500)}</p>
       <p>{bodyData.slice(0,300)}</p>
    </div>
  )
}

export default Blog
