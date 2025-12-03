import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { initialState, reducer } from '../../components/Reducer';


const RoleList = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [roles, setRoles] = useState([]);


  const [state, dispatch] = useReducer(reducer, initialState)
  
  const getRoles = () => {
    dispatch({type:"Loading"});
    axios({
      url: `${baseUrl}/role`,
      method: "GET",
      data: {}
    })
      .then((res) => {
        console.log(res.data);
        setRoles(res.data.roles)

         dispatch({type:"Fetch", payload:res.data.roles });
      })
      .catch((err) => {
        console.log(err);
         dispatch({type:"err", payload:err });
      });
  }


  useEffect(
    () => {
      getRoles()
    }
    , []);

  // userEffetc 
  // axios
  // useState
  // map

  function deleteRole(id) {
    axios({
      url: `${baseUrl}/role/delete`,
      method: "DELETE",
      data: { id: id }
    })
      .then(res => {
        console.log(res);
        getRoles();
      })
      .catch(err => console.log(err))
  }


  

   if(state.loading){
     return (<div>Loading</div>);
   }else if(state.err){
     return (<div>Net work Error</div>);
   }else {
   
  return (
    <>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {state.data.map((role, i) => (
            <tr key={i}>
              <th scope="row">{++i}</th>
              <td>{role.name}</td>
              <td>
                <Link className='btn btn-info' to={`/role/edit/${role.id}`} >Edit</Link>
                <a className='btn btn-danger' onClick={() => {
                   if(confirm("Are Your Sure")){
                     deleteRole(role.id)
                   }
                }
                }  >Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )}
}

export default RoleList