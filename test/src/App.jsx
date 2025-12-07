
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
import LoginLayout from './login/LoginLayout'
import PrivateRoute from './route/PrivateRoute'
import Login from './login/Login'
import Purchase from './pages/purchase/Purchase'
import Parent from './context/Parent'
import { createContext, useContext } from 'react'
import OrderList from './pages/order/OrderList'
import OrderInvoice from './pages/order/OrderInvoice'
import Counter from './components/Counter'
import CustomerListPaginantion from './pages/customer/CustomerListPaginantion'
import HeavyCalculation from './components/HeavyCalculation'

export const  UserContext= createContext();


function App() {


  const user= {
    name:"Hasan",
    age:25,
    email:"hasan@gmail.com"
  }


  return (

    
    <>
     

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/login'   element={<Login/>}  />
          
          <Route path="/" element={ <PrivateRoute> <Layout/> </PrivateRoute>  }>
         
             <Route path='/' element={<Dashboard/>} />
             <Route path='/role' element={<RoleList/>} />
             <Route path='/role/create' element={<CreateRole/>} />
             <Route path='/role/edit/:roleId' element={<EditRole/>} />

             
             <Route path='/user' element={<UserList/>} />
             <Route path='/user/create' element={<CreateUser/>} />


             <Route path='/customer' element={<CustomerList/>} />
             <Route path='/customer/create' element={<CreateCustomer/>} />


             <Route path='/order' element={<OrderList/>}/>
             <Route path='/order/create' element={<CreateOrder/>}/>
             <Route path='/order/invoice/:id' element={<OrderInvoice/>}/>

             <Route path='/purchase/create' element={<Purchase/>}/>



             <Route path='/counter' element={<Counter/>}/>
             
             <Route path='/customerPage' element={<CustomerListPaginantion/>}/>
             <Route path='/use/memo' element={<HeavyCalculation/>}/>

             
          </Route>

         
        </Routes>
      </BrowserRouter>
      
     {/* <UserContext.Provider value={user}>
     <Parent />
     </UserContext.Provider> */}
    </>
  )
}

export default App
