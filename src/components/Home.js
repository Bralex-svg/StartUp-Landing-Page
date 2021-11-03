import React from 'react'
import Earn from './Earn'
import LandingSection from './LandingSection'
import Services from './Services'
import Map from './Map'
import Braging from './Braging'
import Ready from './Ready'


function Home() {
    return (
        <div>
            <LandingSection />
            <Earn />
            <Services />
            <Map />
            <Braging />
            <Ready />
        </div>
    )
}

export default Home
