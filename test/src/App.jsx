import { useState } from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoleList from './pages/roles/RoleList'
import CreateRole from './pages/roles/CreateRole'
import EditRole from './pages/roles/EditRole'
import UserList from './pages/users/UserList'
import CreateUser from './pages/users/CreateUser'
import Dashboard from './pages/home/Dashboard'
import CreateCustomer from './pages/customer/CreateCustomer'
import CustomerList from './pages/customer/CustomerList'
import CreateOrder from './pages/order/CreateOrder'



function App() {
  
  return (
    <>
     

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout/>}>
             
             <Route path='/' element={<Dashboard/>} />
             <Route path='/role' element={<RoleList/>} />
             <Route path='/role/create' element={<CreateRole/>} />
             <Route path='/role/edit/:roleId' element={<EditRole/>} />

             
             <Route path='/user' element={<UserList/>} />
             <Route path='/user/create' element={<CreateUser/>} />


             <Route path='/customer' element={<CustomerList/>} />
             <Route path='/customer/create' element={<CreateCustomer/>} />



             <Route path='/order/create' element={<CreateOrder/>} />

             
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
