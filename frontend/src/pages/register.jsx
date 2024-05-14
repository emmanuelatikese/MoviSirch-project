import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import addValue from '../components/addValue';
import submitHandler from '../components/submitHandler';
// setting up the registration page.
const register = () => {

  const [val, setVal] = useState({
  username: "",
  email: "",
  password: ""
});
const [error, setError] = useState(null);
const Url = "http://localhost:5000/api/register";
const navigate = useNavigate();


console.log(val);

  return (
    
    <div className='register-container'>
    
      <form>
      <h2>Register</h2>
      <div className='input-container'>
        <input type='text'  placeholder='Username' required name="username" onChange={(e)=>addValue(e, setVal)} />
        <input type="text" name='email' required placeholder='Email' onChange={(e)=>addValue(e, setVal)}/>
        <input type="password" name='password' required placeholder='Password' onChange={(e)=>addValue(e, setVal)}/>
      </div>
        {error && <p>{error}!</p>}
        <button onClick={(e)=>submitHandler(e, Url, val, setError, navigate)} > Register</button>

        <p>Do you have an account? Click <Link to="/login">Here</Link> </p>
      </form>
    </div>
  )
}

export default register
