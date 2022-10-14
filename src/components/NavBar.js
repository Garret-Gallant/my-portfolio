import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return(
    <div className='fixed text-center bg-slate-900'>
      <Link to='/' className='ml-6'>Home</Link>
      <Link to='/projects' className='ml-6'>Projects</Link>
      <Link to='/about' className='ml-6'>About Me</Link>
    </div>
  )
}

export default NavBar
