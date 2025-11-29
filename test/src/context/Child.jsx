import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { UserContext } from '../App';

const Child = (props) => {

    console.log(props);
    
  return (
    <div>Child
      <h4> Hello  from child </h4>

        <GrandChild />
    </div>
  )
}

export default Child