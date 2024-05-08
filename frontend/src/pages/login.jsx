import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const login = () => {

  const [val, setVal] = useState({
  username: "",
  password: ""
});

const Url = "https://main--famous-nougat-eca3ac.netlify.app/api/login";
const [error, setError] = useState(null);

const navigate = useNavigate();

const addValue = (e) => {
setVal((prev) => ({ ...prev, [e.target.name]: e.target.value}));
};

console.log(val);
const submitHandler = async(e) =>{
  e.preventDefault();
  try{
    const res = await axios.post(Url, val);
    navigate("/home");
    console.log(res);
    

  }
  catch (err){
    setError(err.response.data);
  }
}

  return (
    
    <div className='register-container'>
    
      <form>
      <h2>Login</h2>
      <div className='input-container'>
        <input type='text'  placeholder='Username' required name="username" onChange={addValue} />
        <input type="password" name='password' required placeholder='Password' onChange={addValue}/>
      </div>
        {error && <p>{error}!</p>}
        <button onClick={submitHandler} > Login</button>

        <p>Do you have an account? Click <Link to="/">Here</Link> </p>
      </form>
    </div>
  )
}

export default login
