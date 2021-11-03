import React from 'react'
import './LandingSection.css'
// import Lady from '../images/lady1.jpg'
import Apple from '../images/en.svg'
import Header from '../images/index-header.jpg'
import Google from '../images/en (1).svg'
function LandingSection() {
    return (
        <>
         <div className="wrapper">
             <div className="box">
                 <h1>The fast, affordable way to ride.</h1>
                 <p>Download the Bolt app</p>
                 <div className="images">
                 <img className = "apples" src= {Apple} alt="" />
                 <img className = "google" src= {Google} alt="" />
                 </div>
            
                 <h3>REQUEST A RIDE ONLINE <i class="fas fa-arrow-right"></i></h3>
             </div>
             <img src= {Header} alt="" />
        </div>   
        </>
    )
}
export default LandingSection
