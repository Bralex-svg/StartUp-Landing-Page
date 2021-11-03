import React from 'react'
import './Ready.css'
import Apple from '../images/en.svg'
// import Head from '../images/index-header.jpg'
import Googler from '../images/en (1).svg'

function Ready() {
    return (
     <>

 <div className="ready">
     <div className="detail">

 
     <h1>Ready to ride?</h1>
  
     <img src= {Googler} className = "googler" alt="" />
     <img src= {Apple} className = "apple" alt="" />
     <p>Or <span className = 'spana'> sign up</span>  to start driving.</p>
   <a href="https://www.linkedin.com/in/adam-alex-eliasu-a379451bb/"> <h4>Website built by Adam Alex</h4></a> 
     </div>
 </div>

     </>
    )
}

export default Ready
