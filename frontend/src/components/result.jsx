import React from 'react'

const result = (props) => {
  return (
    <div className='result-container' >
      <img src={props.profile} className='placeholder'/>

      <ul style={{backgroundImage:"url(" + props.backdrop + ")"}}>

      <li>
      <h3>Title<hr/></h3>
      <p className='p-result'>props.title</p>
      </li>
      <li>
      <h3>Overview<hr/></h3>
      <p className='p-result'>props.Overview</p>
      </li>
      <li>
      <h3>Popularity<hr/></h3>
      <p className='p-result'>props.Popularity</p>
      </li>
      <li>
      <h3>Release date<hr/></h3>
      <p className='p-result'>props.Release</p>
      </li>
      <li>
      <h3>Vote average<hr/></h3>
      <p className='p-result'>props.Vote</p>
      </li>
      <li>
      <h3>Vote count<hr/></h3>
      <p className='p-result'>props.Count</p>
      </li>
      </ul>
    </div>
  )
}

export default result
