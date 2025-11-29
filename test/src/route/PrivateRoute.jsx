import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext= createContext()

export default function PrivateRoute({ children }) {
  
  
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem( "userData")) ;
  if( token){
    return (
       <AuthContext.Provider value={userData}>
       {children } 
       </AuthContext.Provider>
    )
   
  }else{
   return  <Navigate to="/login" />
  }
 



}
