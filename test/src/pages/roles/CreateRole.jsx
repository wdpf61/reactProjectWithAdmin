import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateRole = () => {
 const baseUrl = import.meta.env.VITE_BASE_URL;


 const [role, setRole]= useState({
   name:"",
  //  email:""
 });

 const navigate= useNavigate();

  const handleChange= (e)=>{
    const {value, name}= e.target;
    console.log(value, name);

    setRole((prv)=>({
      ...prv,
      [name]:value
    }));

    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
     console.log(role); 
     
     axios({
      url:`${baseUrl}/role/save`,
      method:"POST",
      data:{role}
     })
     .then(res=>{
      console.log(res)
      if(res){
        navigate('/role');
      }
     } )
     .catch(err=> console.log(err))
  }
 
  return (
   <> 

   <h3>Create Role</h3> 
     <form onSubmit={handleSubmit} >
      <div>
         <label htmlFor="">Name</label> <br />
         <input name='name' type="text" onChange={handleChange} />
      </div>

      <div>
         <label htmlFor="">email</label> <br />
         <input name='email' type="text" onChange={handleChange} />
      </div>

      <br />
      <br />
      <div>
         <input  type="submit" value={"submit"}/>
      </div>
     </form>
   </>
  )
}

export default CreateRole