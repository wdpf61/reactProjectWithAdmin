import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"



const EditRole = () => {

 const baseUrl = import.meta.env.VITE_BASE_URL;

 const {roleId}= useParams();
 const [role, setRole]=useState({
   id:"",
   name:""
 });

 const navigate= useNavigate()

  function fetchRole(){

   axios({
       url:`${baseUrl}/role/find/${roleId}`,
       method:"GET",
       data:{}
   })
   .then((res)=>{
     console.log(res.data.role);
     setRole({
       id:res.data.role.id,
       name:res.data.role.name
     });
   })
   .catch( (err)=> { console.log(err)})
  
  }


 useEffect(
   ()=>{
     fetchRole()
   },[]);

    

  // console.log(`${baseUrl}/role/find/${roleId}`);

 const  handleChange = (e)=>{
   const {name, value}= e.target;
   
   setRole((prv)=>({
     ...prv,
     [name]:value
   }));



 }

 function handleSubmit(e){
    e.preventDefault()
   
    axios({
       url:`${baseUrl}/role/update`,
       method:"PUT",
       data:{role}
   })
   .then((res)=>{
     console.log(res.data);
     navigate("/role")
   })
   .catch( (err)=> { console.log(err)})
    
    
 }
  

  return (
    <>
      <h3>Edit Role</h3> 
     <form onSubmit={handleSubmit} >
      <div>
         <label htmlFor="">Name</label> <br />
         <input value={role.name} name='name' type="text" onChange={handleChange} />
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

export default EditRole