import React, { useState } from 'react'
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";
import { motion, useAnimation } from 'framer-motion';

const header = () => {
const {error, setError} = useState(null);
const nav = useNavigate();

const ctl = useAnimation();
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
    <motion.div 
    whileHover={{
      boxShadow:"0 0 25px #0ED2F7",
      transition:{
        duration: 3,
      }
    }}
    
    className='nav-container'>
      <ul>
        <li>MOVISIRCH</li>






<Link to={"/login"} onClick={handleLogout}
style={{
  textDecoration:"none",
  color:"white"
}}
><li
>Logout

</li>
</Link>
      </ul>
    </motion.div>
  )
}

export default header
