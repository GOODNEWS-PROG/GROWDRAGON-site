import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav'>
       <h3 className='move'>  <img src='./Group (1).png' />   GROWDRAGON </h3>
       <div className='list'>
            <ul>
              <li>Explore <img src='./Vector 4 (1).png' /></li>
              <li>My Profile</li>
              <li>Following</li>
              <li>Activity</li>
              <li>How It Works</li>
              <li>Community <img src='./Vector 4 (1).png' /></li>
            </ul>
       </div>
       <div className='img1'>
         <img src='./Vector (14).png' />
         <img src='./Vector (15).png' />
       </div>
    
    </div>
  )
}
