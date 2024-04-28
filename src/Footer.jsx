import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div>
        <footer id=
        'footer'>
        <div className="row">
            <div className="col col1">
                <h3>Brainwave.io</h3>
                <p>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
                <div className='logos'>
         <div className='twitter'> <a href="#twitter" target='_blank'>
          <i class="fa-brands fa-twitter icon"></i>
          </a></div>

          <div className='instagram'> <a href="#instagram" target='_blank'>
            <i class="fa-brands fa-instagram icon"></i>
            </a></div>

        <div className='facdbook'>    <a href="#facebook" target='_blank'>
            <i class="fa-brands fa-facebook icon"></i>
            </a>
</div>
            <div className='linkdin'><a href="#linkdin" target='_blank'>
            <i class="fa-brands fa-linkedin icon"></i>
            </a>
</div>
         <div className='github'>   <a href="#github" target='_blank'>
            <i class="fa-brands fa-github icon"></i>
            </a></div>
</div>
            </div>
            <div className="col col2">
                <h5>Company</h5>
                <ul className='footerUl'><li><a href="">About us</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Press</a></li></ul>
            </div>
            <div className="col col3">
            <h5>Product</h5>
                <ul className='footerUl'><li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Help desk</a></li>
                <li><a href="">Support</a></li>
                </ul>
            </div>
            <div className="col col4">
            <h5>Services</h5>
                <ul className='footerUl'><li><a href="">Digital Marketing</a></li>
                <li><a href="">Content Writing</a></li>
                <li><a href="">SEO for Business</a></li>
                <li><a href="">UI Design</a></li>
                </ul>
            </div>
            <div className="col col5">
            <h5>Legal</h5>
                <ul className='footerUl'><li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Return Policy</a></li>
                </ul>
            </div>
        </div>
        </footer>
      
    </div>
  )
}

export default Footer
