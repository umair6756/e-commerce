import React, { useState } from 'react'
import './ViewProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
const Sidebar = ({label}) => {


  return (
    <div>
  <div className="page">
  <header tabIndex={0}><p className='fs-2 fw-bolder ' style={{marginTop:'.9rem'}}>Header</p></header>

  <div id="nav-container">
    <div className="bg" />

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
    <div className="button" tabIndex={0}>
      
      <FontAwesomeIcon icon={faBars} className='fs-4'/>
   
     </div>
      <div><h3 className='fw-bolder'>{label}</h3></div>

     <div style={{cursor:'pointer'}}><FontAwesomeIcon icon={faPowerOff} className='fs-4'/></div>
    </div>
    

    <div id="nav-content" tabIndex={0}>
      <ul>
        <li>
          <a href="#0">Home</a>
        </li>
        <li>
          <a href="#0">Services</a>
        </li>
        <li>
          <a href="#0">Blog</a>
        </li>
        <li>
          <a href="#0">About</a>
        </li>
        <li>
          <a href="#0">Contact</a>
        </li>
        <li className="small">
          <a href="#0">Facebook</a>
          <a href="#0">Instagram</a>
        </li>
      </ul>
    </div>
  </div>

</div>


    </div>
  )
}

export default Sidebar