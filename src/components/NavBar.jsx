import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navBar__container'>
        <nav className='navBar'>
            <Link to="/" className='link' activeclassname="active">Home</Link>
            <Link to="/create" className='link'>Create</Link>
        </nav>
    </div>
  )
}
