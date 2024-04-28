import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'
import Hero2 from './Hero2.jsx'
import Hero3 from './Hero3.jsx'
import Hero4 from './Hero4.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Hero/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Footer/>
   
  </React.StrictMode>,
)
