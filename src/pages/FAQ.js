import React from 'react'
import Navbar from '../components/Navbar'
import FAQPage from '../components/FAQPage'
import Footer from '../components/Footer'
import { HeroSection } from '../components/Buttons'

const FAQ = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection headingLabel="Get Help" heroBackground="faqBackground"/>
        <FAQPage/>
        <Footer/>
    </div>
  )
}

export default FAQ