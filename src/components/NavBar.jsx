import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navBar__container'>
        <nav className='navBar'>
            <NavLink to="/" className={(navData) => navData.isActive? "active" : "link"}>Home</NavLink>
            <NavLink to="/create" className={(navData) => navData.isActive? "active" : "link"}>Create</NavLink>
        </nav>
    </div>
  )
}
