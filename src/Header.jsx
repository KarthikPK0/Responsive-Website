import React from 'react'
import './Header.css';

function Header() {
  return (
    <div>
      <header>
      <input type="checkbox" id="check"/>

<label htmlFor="check" className="checkbtn">
 
  <i class="fa-solid fa-bars"></i>

</label>
<span className="logo">
                Brainwave.io
            </span>
        <nav>
   
          
          
            <ul className='headerUl'>
                <li><a href="#demos">Demos</a></li>
                <li><a href="#pages">Pages</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
          
        </nav>
        <button className='headButton'>
              <a href="">Get started free</a>  
            </button>
      </header>
    </div>
  )
}

export default Header
