import React, { useState } from 'react'
import './ViewProducts.css'
const Sidebar = () => {


  return (
    <div>
  <div className="page">
  <header tabIndex={0}>Header</header>
  <div id="nav-container">
    <div className="bg" />
    <div className="button" tabIndex={0}>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
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