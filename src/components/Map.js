import React from 'react'
import './Map.css'
import Index from '../images/index-phone.png'

function Map() {
    return (
      <>
      <div className="map">
          <h1>Get a ride in minutes!</h1>
          <p>Pick your destination, request a ride, meet your driver, enjoy the journey.</p>
          <div className="map-image">
   <img src = {Index} alt="" />
      </div>
      </div>
  
      </>
    )
}

export default Map
