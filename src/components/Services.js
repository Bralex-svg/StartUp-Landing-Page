import React from 'react'
import './Services.css'
import Car from '../images/car.svg'
import Money from '../images/money.svg'
import Phone from '../images/phpne.svg'

function Services() {
    return (
       <>
     <div className="wrap-service">
         <div className="wrap1 wrap2">
             <img className = "car" src= {Car} alt="" />
             <h2>Get a ride</h2>
             <p>Bolt offers you a ride in minutes.</p>
         </div>
         <div className="wrap1 wrap4">
             <img src= {Money} alt="" />
             <h2>The best prices</h2>
             <p className = "cut">We aim to offer the best ride prices in every city. See for yourself!</p>
         </div>
         <div className="wrap1 wrap3">
             <img src= {Phone} alt="" />
             <h2>Easy to use</h2>
             <p className = "cut">Get wherever you need to go as quickly as possible.</p>
         </div>
     </div>
       </>
    )
}

export default Services
