import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import RoleList from '../pages/roles/RoleList'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
       <Header/>
         <div className="container">
          
           <Outlet/>
         </div>
       <Footer/>
   </>
  )
}

export default Layout