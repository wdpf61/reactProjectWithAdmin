import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from '../../components/SubmitButton'
import axios from 'axios'
import UseCreateApi from '../../components/UseCreateApi'

const CreateCustomer = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const {submit} = UseCreateApi(`${baseUrl}/customer/save`);
  const [Customer, setCustomer] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    photo: ""
  })

  const handleChange = (e) => {
    const { name, value , files, type } = e.target;
    console.log(e);
    
    setCustomer((data) => ({
      ...data,
      [name]: type === "file" ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Customer);

    let customer = new FormData();
    customer.append("name", Customer.name);
    customer.append("email", Customer.email);
    customer.append("address", Customer.address);
    customer.append("mobile", Customer.mobile);
    customer.append("photo", Customer.photo);


    axios(
      {
        url: `${baseUrl}/customer/save`,
        method: "POST",
        data: customer,
        headers:{'Content-Type': 'multipart/form-data'}
      }
    )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);

      })

  //  submit(Customer);

}



return (

  <>
    <Link to="/customer">Customer list</Link>
    <br />

    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <div>
        <label htmlFor="customer">Name</label>
        <input type="text" name='name' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="customer">Mobile</label>
        <input type="text" name='mobile' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="customer">Email</label>
        <input type="text" name='email' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="customer">Address</label>
        <input type="text" name='address' onChange={handleChange} />
      </div>
      <div>
            <label htmlFor="customer">Photo</label>
            <input type="file" name='photo' onChange={handleChange} />
        </div>

      <div>
        <SubmitButton name="save" type="submit" color="red" />
        <SubmitButton name="Reset" type="reset" color="green" />
      </div>

    </form>
  </>



)
}

export default CreateCustomer