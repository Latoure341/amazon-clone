import React from 'react'
import "./LogIn.css"

const LogIn = () => {
  return (
    <div className='form-container'>
        <form className='form'>
            <h1>Login</h1>
            <label htmlFor="email">Email or phone number</label>
            <input type="text" placeholder='Email or phone number' />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' />
            <button type='submit'>Sign In</button>
        </form>
      
    </div>
  )
}

export default LogIn
