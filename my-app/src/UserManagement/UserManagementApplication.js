import React,{useState,useEffect} from 'react';
import USERForm from './MakingUserManagement-Application/USERForm';
const URL=`https://jsonplaceholder.typicode.com/todos`;
const loadingmesage=`Data is Loading`;
const Errormessgae=`Unable to fetch Data`;

export default function App() {
  const [users,setusers]=useState(null);
  const[isLoading,setIsLoadding]=useState(true);
  const [error,setError]=useState("");
  const [selectedUserId,SetSelectedUserId]=useState(false);
  const [updateFlag,setUpdateFlag]=useState({
    username:" ",
    email:" ",
  });
  
  const getAllUsers=()=>{
      fetch(URL)
      .then((response)=>{
        if(!response.ok){
          throw Error("Could not ne fetch");
        }else{
          return response.json();
        }
      }).then((data)=>{
        setusers(data.users);
        console.log(data);
    
      }).catch((err)=>{
         setError(err.message);
      }).finally(()=>{
        setIsLoadding(false)
      })
  }

  useEffect(()=>{
   getAllUsers();
  },[])

  const handleEdit=(id)=>{
   const filterData=users.filter((user)=>user.id===id);
   setUpdateFlag({
    username:filterData[0].username,
    email:filterData[0].email
   })
  }

 const handleDeelete=(id)=>{
  fetch(URL +`/${id}`,{method:'DELETE'})
  .then((response)=>{
    if(!response.ok){
      throw Error("Could not ne deleted");
    }else{
     getAllUsers();
    }
  }).catch((err)=>{
     setError(err.message);
  })
 }


 const Adduser=(user)=>{
  fetch(URL,{method:'POST',headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    user
  })
})
.then((response)=>{
  if(response.status===201){
    getAllUsers();
  }else{
    throw new Error("Could not create new users");
  }
}).catch((err)=>{
  console.log(err.message);
})
 }


 
const selectedUser=(user)=>{
  fetch(URL,{method:'PUT',headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    user
  })
})
.then((response)=>{
  if(response.ok){
    throw new Error("Could not create new users");
  }else{
    getAllUsers();
    setUpdateFlag(false);
  }
}).catch((err)=>{
  setError(err.message)
}).finally(()=>{

})

}


  return (
    <div>
       <h1>User Management Application</h1>
       {isLoading && <p>{loadingmesage}</p>}
       {error && <p>{Errormessgae}</p>}
       {
        updateFlag ?
        (
          <USERForm btnText="Update users" 
          selectedUser={selectedUser}
          handleSubmitData={handleEdit}
          />
        ):(
          <USERForm btnText="Add users" 
       handleSubmitData={Adduser}/>
        )}
       
       <section>
       {
        users
        && users.map((user)=>{
          const{userId,id,title}=user
          return(
            <article key={id}>
              <p>{userId}</p>
              <p>{title}</p> 
              <button onClick={handleEdit(id)}>Edit</button>
              <button onClick={handleDeelete(id)}>Delete</button>
            </article>
          )
        })
       }
       </section>
    </div>
  );
    }