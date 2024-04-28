import React from 'react'
import './Hero.css'
import homeImage from './assets/images/homeimg.avif'




function Hero() {
  return (
    <div className='sec-1'>
        <div className="s1box">
            <h2 className='s1h2'>Get things done by awesome <br/> remote team</h2>
            <p>We share common trends and strategies for improving your <br /> rental income and making sure you stay in high demand.</p>
            <div className="s1buttons">
                <button className='hButton'><a href="#getfree">Get started for free <i class="fa-solid fa-arrow-right finalBtn"></i></a></button>
                <button className='hButton Btn2'><a href="#learnmore">Learn more <i class="fa-solid fa-arrow-right finalBtn"></i> </a> </button>
            </div>
   
        </div>

        <img className='homeImg' src={homeImage} alt="" />

        <div className="s1r1">
          <div className="s1col col1">
            <div><i class="fa-solid fa-code symbol"></i></div>
            <h5>Project management</h5>
            <p>With lots of unique blocks, you can <br/> easily build a page without coding. <br/>Build your next landing page.</p>
          </div>
          <div className="s1col col2">
          <div><i class="fa-solid fa-clock  symbol"></i></div>
            <h5>Time tracking</h5>
            <p>With lots of unique blocks, you can <br/> easily build a page without coding. <br/>Build your next landing page.</p>
          </div>
          <div className="s1col col3">
          <div><i class="fa-solid fa-mobile  symbol"></i></div>
            <h5>Beautiful mobile app</h5>
            <p>With lots of unique blocks, you can <br/> easily build a page without coding. <br/>Build your next landing page.</p>
          </div>
        </div>
      
    </div>
  )
}

export default Hero
