import { useState } from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoleList from './pages/roles/RoleList'
import CreateRole from './pages/roles/CreateRole'
import EditRole from './pages/roles/EditRole'
import UserList from './pages/users/UserList'
import CreateUser from './pages/users/CreateUser'



function App() {
  
  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             
             <Route path='/role' element={<RoleList/>} />
             <Route path='/role/create' element={<CreateRole/>} />
             <Route path='/role/edit:id' element={<EditRole/>} />

             
             <Route path='/user' element={<UserList/>} />
             <Route path='/user/create' element={<CreateUser/>} />

             
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
