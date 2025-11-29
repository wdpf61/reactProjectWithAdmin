import React, { useContext } from 'react'
import { UserContext } from '../App';

const GrandChild = () => {
      const user= useContext(UserContext);
  return (
    <div>GrandChild

      <h4>Hello from  {user.name} from grand child</h4>


    </div>
  )
}

export default GrandChild