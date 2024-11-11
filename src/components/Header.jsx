import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

    let sample ='hello this is sample'
  return (
    <div style={{backgroundColor : 'yellow', height:'90px',display:'flex',justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
      <Link to='/'>
      
      <h2>header</h2>
      </Link>

      <Link to='/task' >
        <h2 >Task</h2>
      </Link>

      <Link to='/pending'>
      <h2>Pending</h2>
      </Link>
    </div>
  )
}

export default Header
