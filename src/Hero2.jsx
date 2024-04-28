import React from 'react'
import chartImage from './assets/images/chart.png'
import './Hero2.css'



function Hero2() {
  return (
    <div className='sec2'>
      <div className="s2row1">
        <div className="s2col1 ">
            <h3>
            Getting started with <br /> Albino is easier than ever
            </h3>
            <p>
            With lots of unique blocks, you can easily build a <br /> page without coding. Build your next landing <br /> page so quickly with Albino.
            </p>
            <button className='h2Button'><a href="#getfree">Get started for free <i class="fa-solid fa-arrow-right finalBtn"></i></a></button>
        </div>
        <div className="s2col2">
            <img src={chartImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero2
