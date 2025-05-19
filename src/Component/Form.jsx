import React from 'react'

const Info = () => {
  return (
    <div>
        <form>
            <div className='form'>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' placeholder='Enter your name' required/>
            </div>
            <div className='form'>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' placeholder='Enter your email' required/>
            </div>
            <div className='form'>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' placeholder='Enter your password' required/>
            </div>
            <button type="submit">Submit</button>
      
        </form>
    </div>
  )
}

export default Info
