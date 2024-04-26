import React from 'react'

const register = () => {
  return (
    <div className='register-container'>
      <form>
        <input type='text' placeholder='Username' required/>
        <input type="text"  required placeholder='Email' />
        <input type="password" required placeholder='Password'/>
        <button > Register</button>
      </form>
    </div>
  )
}

export default register
