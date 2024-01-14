import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div>

      <p className='sub'>Subscribe to receive free webflow cloneables every month.</p>
    <div className='search'>
      <input className='email'   placeholder='Enter your email' /><button className='button'>Subscribe</button>
    </div>

<div className='footer'>

<div className='app'>
  <h1>Download the App <br /> to explore any</h1>
  <div className='store'>
  <img src='App Store.png' />
  <img className='play' src='Google Play.png' />
  </div>
</div>

<div className='qr-code'>
<img src='QR (1).png' />
</div>

<div className='grow'>
<h3 className='mov'><img src='./Group (1).png' />   GROWDRAGON </h3>
<p>Join our mailing list to stay in <br /> the loop with our newest <br /> feature releases, drops, and <br /> tips and tricks for navigating <br /> OpenSea. </p>
</div>
</div>

<div className='medias'>
  <img src='014-twitter.png' />
  <img src='015-facebook.png' />
  <img src='016-pinterest.png' />
  <img src='001-tiktok.png' />
  <img src='002-VK.png' />
  <img src='003-whatsapp.png' />
  <img src='004-meta.png' />
  <img src='010-telegram.png' />
  <img src='011-instagram.png' />
</div>

    </div>
  )
}
