import React from 'react'
import {motion} from "framer-motion";

const result = (props) => {
  return (
    <div className='result-container' >
      <motion.img 
      whileHover={{
      boxShadow:"0 0 20px pink",
      borderColor:"pink"
    }}
      src={props.profile} className='placeholder'/>

      <motion.ul 
      whileHover={{
      boxShadow:"0 0 20px pink",
      borderColor:"pink"
    }}
      style={{backgroundImage:"url(" + props.backdrop + ")"}}>

      <li>
      <h3>Title<hr/></h3>
      <p className='p-result'>{props.title}</p>
      </li>
      <li>
      <h3>Overview<hr/></h3>
      <p className='p-result'>{props.Overview}</p>
      </li>
      <li>
      <h3>Popularity<hr/></h3>
      <p className='p-result'>{props.Popularity}</p>
      </li>
      <li>
      <h3>Release date<hr/></h3>
      <p className='p-result'>{props.Release}</p>
      </li>
      <li>
      <h3>Vote average<hr/></h3>
      <p className='p-result'>{props.Vote}</p>
      </li>
      <li>
      <h3>Vote count<hr/></h3>
      <p className='p-result'>{props.Count}</p>
      </li>
      </motion.ul>
    </div>
  )
}

export default result
