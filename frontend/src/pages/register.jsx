import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// setting up the registration page.
const register = () => {

  const [val, setVal] = useState({
  username: "",
  email: "",
  password: ""
});

const Url = "http://localhost:5000/api/register";
const [error, setError] = useState(null);

const navigate = useNavigate();

// adding values to the value.
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
    console.log(err);
  }
}

  return (
    
    <div className='register-container'>
    
      <form>
      <h2>Register</h2>
      <div className='input-container'>
        <input type='text'  placeholder='Username' required name="username" onChange={addValue} />
        <input type="text" name='email' required placeholder='Email' onChange={addValue}/>
        <input type="password" name='password' required placeholder='Password' onChange={addValue}/>
      </div>
        {error && <p>{error}!</p>}
        <button onClick={submitHandler} > Register</button>

        <p>Do you have an account? Click <Link to="/login">Here</Link> </p>
      </form>
    </div>
  )
}

export default register
