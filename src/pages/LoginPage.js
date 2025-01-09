import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Feactures from '../components/Feactures'
import Footer from '../components/Footer'

const LoginPage = () => {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Feactures/>
        <Footer/>

    </div>
  )
}

export default LoginPage