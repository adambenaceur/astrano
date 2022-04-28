import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div className='header'> 
        <a href='#'> <img src='assets/Astrano-logo.png' alt='' className='header-logo' /> </a>

        <div className='nav-links'>
          <ul className='nav-bar'> 
            <li> <a className='active' href='index.html'>Home</a></li>
            <li> <a href='about.html'>About</a></li>
            <li> <a href='contact.html'>Contact</a></li>
            <li> <a href='donate.html'>Donate</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header