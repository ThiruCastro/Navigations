import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const userdetails=useParams( );
   
  return (
    <div>
        {userdetails.name}
    </div>
  )
}
export default User