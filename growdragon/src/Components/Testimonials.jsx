import React from 'react'
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <div>
    <div className='test'>
    <h1>Testimonials</h1>
    <p>Hear What Our Clients Say</p>

    <p className='trade'>Join 30 million traders and investors making <br /> better, brighter decisions in the <br /> world markets.</p>
    </div>

    <div className='testimony'>

<div className='moore'>
   <img src='Vector (17).png' />
   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do elusmod tempor incididunt ut labore et dolore <br /> magna aliqua quis nostrud exercitation ullamco </p>
   <img src='Group 38145.png' />
   <div className='web'>
   <h3>Sophie Moore</h3>
   <p>Product Developer at <br /> Webflow </p>
   </div>
</div>


<div className='menu'>
  <div className='air'>
  <img src='Group 39221.png' />
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do elusmod tempor incididunt ut labore et dolore <br /> magna aliqua quis nostrud exercitation ullamco </p>
  <img src='Group 38145 (1).png' />
  <div className='airs'> 
  <h3>Adam Smith</h3>
  <p>Web Designer at Airtable</p>
  </div>
  </div>

<div className='zap'>
  <img src='Vector (18).png' />
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do elusmod tempor incididunt ut labore et dolore <br /> magna aliqua quis nostrud exercitation ullamco </p>
  <img src='Group 38145 (2).png' />
  <div className='zaps'>
    <h3>Mike Warren</h3>
    <p>Product Manager at Zapier</p>
  </div>
</div>


</div>
</div>



    </div>
  )
}
