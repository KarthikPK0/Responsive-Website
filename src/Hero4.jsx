import React from 'react'
import './Hero4.css'

function Hero4() {
  return (
    <>
    <div className="h4container">
    <div className="h4r1">
    <h3>Pricing & Plans</h3>
      <p>With lots of unique blocks, you can easily build a page without <br /> coding. Build your next landing page.</p>
    </div>

    <div className="flex-container">
        <div className="item item-1">
            <div>BASIC</div>
            <span>$29</span>
            <p>One time purchase</p>
            <p>With lots of unique blocks, you can <br /> easily build a page without coding <br /> Build your next landing page.</p>
            <button className='flexButton'><a href="#getfree">Get started for free <i class="fa-solid fa-arrow-right finalBtn"></i></a></button>
            

        </div>
        <div className="item item-2">
        <div>STANDARD</div>
            <span>$49</span>
            <p>One time purchase</p>
            <p>With lots of unique blocks, you can <br /> easily build a page without coding <br />Build your next landing page.</p>
            <button className='flexButton'><a href="#getfree">Get started for free <i class="fa-solid fa-arrow-right finalBtn"></i></a></button>
            
        </div>
        <div className="item item-1">
        <div>PREMIUM</div>
            <span>$99</span>
            <p>One time purchase</p>
            <p>With lots of unique blocks, you can <br /> easily build a page without coding <br /> Build your next landing page.</p>
            <button className='flexButton'><a href="#getfree">Get started for free <i class="fa-solid fa-arrow-right finalBtn"></i></a></button>
            
        </div>
    </div>

  <div className="boxcontent">
  <div className="flex-container2">
        <div className="card card-1">
            <h5>
            <i class="fa-solid fa-question"></i>Can I use Albino for my clients?
            </h5>
            <p>
            With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page. Integer ut <br /> Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam <br />sagittis interdum Melisandre.
            </p>
            <a className='learnmore' href='#learnmore'>Click to learn more <i class="fa-solid fa-arrow-right learn"></i> </a>
        </div>
        <div className="card card-2">
        <h5>
            <i class="fa-solid fa-question"></i>Can I use Albino for my clients?
            </h5>
            <p>
            With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page. Integer ut <br /> Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam <br /> sagittis interdum Melisandre.
            </p>
        </div>
        <div className="card card-3">
        <h5>
            <i class="fa-solid fa-question"></i>Can I use Albino for my clients?
            </h5>
            <p>
            With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page. Integer ut <br /> Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam <br />sagittis interdum Melisandre.
            </p>
        </div>
        <div className="card card-4">
        <h5>
            <i class="fa-solid fa-question"></i>Can I use Albino for my clients?
            </h5>
            <p>
            With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page. Integer ut <br /> Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam <br />sagittis interdum Melisandre.
            </p>
        </div>
       
    </div>

  </div>
  <p className='finalpara'>Haven’t got your answer?<a href='#contact' className='finalspan'> Contact our support now</a></p>
    </div>

    <div className="h4r2">
        <div className="h4r2col">
        <h3>Build better landing page fast</h3>
            <p>With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page.</p>
        </div>

        <div className="h4r2col">
        <button className='finalButtonA'><a href="#learnmore">Learn more<i class="fa-solid fa-arrow-right finalBtn"></i></a> </button>
        <button className='finalButtonB'><a href="#getfree">Get it now <i class="fa-solid fa-arrow-right finalBtn"></i></a></button>
                
        </div>
       
        
        </div>
        <hr />

    
      
    </>
  )
}

export default Hero4
