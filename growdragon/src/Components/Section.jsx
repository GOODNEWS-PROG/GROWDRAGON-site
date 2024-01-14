import React from 'react'
import './Section.css'

export const Section = () => {
  return (
    <div className='section'>
   
<div className='box1'>
   <h2>Build Your <br /> Crypto</h2>
   <div>
   <img className='sec'  src='Group (3).png' />
   <img className='sec1' src='Group (2).png' />
   </div>
</div>
   <div className='box'>
       <h2>
        24h <br /> Trading <br /> Volume
       </h2>

    <div className='group'>
       <h1><img src='Group 3.png' />  $76 Billion</h1>
       </div>
   </div>


<div className='box2'>
   <h1>Crypto <br /> Currencies <br /> Listed </h1>
   <div className='center'>
    <h1 ><img className='plus' src='Group (5).png' /> <span className='cent'>600+</span> </h1>
   </div>
   <div className='cart'>
    <img src='Rectangle 4 (1).png' /><img className='carter' src='Rectangle 4.png' />
   </div>
</div>

<div className='box3'>
  <h2>Trade With These</h2>
  <img src='Rectangle 27 (1).png' />
</div>

<div className='box4'>
   <img src='Group (6).png' />
   <h2>Borderless <br /> Payment</h2>
</div>

    </div>
  )
}
