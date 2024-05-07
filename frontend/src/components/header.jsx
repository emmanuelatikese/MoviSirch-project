import React, { useState } from 'react'
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

const header = () => {
  const {error, setError} = useState(null);
  const nav = useNavigate();
  
  const handleLogout = async()=>{
    try{
      const data = await axios.post("http://localhost:5000/api/logout");
      nav("/login");
      console.log(data);
    }
    catch(err){
      await setError(err);
    }
  }
  return (
    <div className='nav-container'>
      <ul>
        <li>MOVISIRCH</li>






<Link to={"/login"} onClick={handleLogout}
style={{
  textDecoration:"none",
  color:"white"
}}
><li>Logout</li>
</Link>
      </ul>
    </div>
  )
}

export default header
