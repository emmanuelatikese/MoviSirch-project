import { useState } from 'react'
import {useNavigate, Link} from "react-router-dom";
import { motion} from 'framer-motion';
import handleLogout from './handleLogout';


// setting up the header component.
// setting up animation.

const header = () => {
const {error, setError} = useState(null);
const nav = useNavigate();



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






<Link to={"/login"} onClick={()=>handleLogout(setError,nav)}
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
