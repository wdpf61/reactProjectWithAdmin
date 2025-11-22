import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UseFetchApi from '../../components/UseFetchApi';

const CustomerList = () => {

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_IMG_URL;

   const {loading, data, err} = UseFetchApi(`${baseUrl}/customer`);

  // const abc =  UseFetchApi(`${baseUrl}/customer`);

  // const abc = () => {
  //   axios(
  //     {
  //       url: `${baseUrl}/customer`,
  //       method: "GET",
  //       data: {}
  //     }
  //   )
  //     .then(res => {
  //       console.log(res.data);
  //       setCustomers(res.data.customers)
  //       setloading(false);
  //     })
  //     .catch(err => {
  //       console.log(err.data);
  //     })
  // }

  useEffect(() => {
    // abc();
  }, [])
  

  console.log(data);
  

const customerList = "All  Customer ";

  if(loading){
    return (<h1>Loading</h1>);
  }else{
  return (
    <>
      <h1> {customerList} </h1>


      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Photo</th>
          </tr>
        </thead>

        <tbody>
          {data.customers.map((c, i) => (
            <tr key={i}>
              <td>{++i}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.email}</td>
              <td>  <img width={50} src={`${imgUrl}/${c.photo}`} alt={c.name} 
            /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
  }


}

export default CustomerList