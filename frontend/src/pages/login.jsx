import {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import addValue from '../components/addValue';
import submitHandler from '../components/submitHandler';

// set up the login page 
const login = () => {

  const [val, setVal] = useState({
  username: "",
  password: ""
});

const Url = "http://localhost:5000/api/login";
const [error, setError] = useState(null);
const navigate = useNavigate();


console.log(val);
  return (
    
    <div className='register-container'>
    
      <form>
      <h2>Login</h2>
      <div className='input-container'>
        <input type='text'  placeholder='Username' required name="username" onChange={(e)=>addValue(e, setVal)} />
        <input type="password" name='password' required placeholder='Password' onChange={(e)=>addValue(e, setVal)}/>
      </div>
        {error && <p>{error}!</p>}
        <button onClick={(e)=>submitHandler(e, Url, val, setError, navigate)} > Login</button>

        <p>Do you have an account? Click <Link to="/">Here</Link> </p>
      </form>
    </div>
  )
}

export default login
