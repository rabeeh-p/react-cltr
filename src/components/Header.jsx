import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div style={{backgroundColor : 'yellow', height:'90px',display:'flex',justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
      <Link to='/'>
        <h2>header</h2>
      </Link>

      <Link to='/task' >
        <h2 >Calculator</h2>
      </Link>

      <Link to='/pending'>
        <h2>Todo </h2>
      </Link>

      <Link to='/data'>
        <h2>Data Fetcher </h2>
      </Link>

      <Link to='/counter'>
        <h2>Counter </h2>
      </Link>

      <Link to='/callback'>
        <h2>Callback page </h2>
      </Link>
      <Link to='/memo'>
        <h2>Memo page </h2>
      </Link>
    </div>
  )
}

export default Header
