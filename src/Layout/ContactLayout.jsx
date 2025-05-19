import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const ContactLayout = () => {
    const navigate=useNavigate()
  return (
    <div className='container'>
        <button onClick={( )=> navigate("info")}>Info</button>
      
        <button onClick={( )=> navigate("form")}>Form</button>
        <Outlet/>
    </div>
  )
}

export default ContactLayout