import React from 'react'
import './Braging.css'
import Lory from '../images/lory.svg'
import Love from '../images/love.svg'
import Call from '../images/call.svg'

function Braging() {
    return (
     <>
        <div className="Braging">
         <div className="brag1 brag2">
             <img className = "lory" src= {Lory} alt="" />
             <h2>Safe and convenient</h2>
             <p>Moving with Bolt is easy, convenient and fast.</p>
         </div>
         <div className="brag1 brag4">
             <img src= {Love} alt="" />
             <h2>Happy drivers, happy riders</h2>
             <p className = "cut">Bolt drivers earn more thanks to lower commission rates.</p>
         </div>
         <div className="brag1 brag3">
             <img src= {Call} alt="" />
             <h2>Always there for you</h2>
             <p className = "cut">Get fast support, whenever you need it.</p>
         </div>
     </div>
     </>
    )
}

export default Braging
