import React from 'react'
import { About, Contact, HTU, Tools, Hero, Navbar, Downloads, StarsCanvas } from '../components'
const Home = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <HTU />
            <Tools />
            <Downloads />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    )
}
export default Home