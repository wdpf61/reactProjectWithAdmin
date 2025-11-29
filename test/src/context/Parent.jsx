
import { useContext } from "react"
import Child from "./Child"
import { UserContext } from "../App"

const Parent = () => {

  const user= useContext(UserContext);

   console.log(user);
   
  return (
    <div>Parent
      <h4> Hello {user.name} from parent </h4>
     
      <Child />

    </div>
  )
}

export default Parent