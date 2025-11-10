import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const RoleList = () => {

  const getRoles = () => {
    axios({
      url: "http://localhost/wdpf-batch-66_class/react/admin/api/role",
      method: "GET",
      data: {}
    })
      .then((res) => {
        console.log(res.data);
        setRoles(res.data.roles)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [roles, setRoles] = useState([]);
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
      url: "http://localhost/wdpf-batch-66_class/react/admin/api/role/delete",
      method: "DELETE",
      data: { id: id }
    })
      .then(res => {
        console.log(res);
        getRoles();
      })
      .catch(err => console.log(err))
  }

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
          {roles.map((role, i) => (

            <tr>
              <th scope="row">{++i}</th>
              <td>{role.name}</td>
              <td>
                <Link className='btn btn-info' >Edit</Link>
                <a className='btn btn-danger' onClick={() => deleteRole(role.id)}  >Delete</a>
              </td>
            </tr>
          ))}





        </tbody>
      </table>




    </>
  )
}

export default RoleList