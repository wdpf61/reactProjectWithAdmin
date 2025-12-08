import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext= createContext()

const PrivateRoute = ({ children }) =>{
  
function decodeJWT(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

const token = localStorage.getItem("token");
const userData = decodeJWT(token);
// console.log("tokendecode",decoded);
// const userData = JSON.parse(localStorage.getItem( "userData")) ;
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

export default PrivateRoute