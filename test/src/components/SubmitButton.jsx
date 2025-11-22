import React from 'react'

const SubmitButton =({name, type, ...rest})=> {
  return (
    <button style={{backgroundColor:rest.color}}  {...rest} type={type}>{name}</button>
  )
}


 export default SubmitButton