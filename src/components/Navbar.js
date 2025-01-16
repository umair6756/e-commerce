import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css'; // Import the CSS for the navbar
import { Link, Links } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faChevronDown, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { CartContext } from './CartContext';

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage the state of the menu
  // const [isDropdown, setIsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScrolle = () => {
      if(window.scrollY>80){
        setScrolled(true)
      }
      else{
        setScrolled(false)

      }

    }

    window.addEventListener("scroll", handleScrolle)

    return () => window.removeEventListener("scroll", handleScrolle)


  }, [])

  const {handleSearch,searchTerm} = useContext(CartContext)
  // // Toggle menu state on burger button click
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const toggleDropdown = () => {
  //   setIsDropdown(!isDropdown)
  // }

  // const { cart } = useContext(CartContext);

  return (
    <>
      {/* <div className={`navBar ${scrolled ? "scrolled":""}`}>
        <p>Umair</p>
        <button id="burger" className={`burger ${isMenuOpen ? 'show-x' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={isMenuOpen ? 'show' : '' }  id="navList">
          <li><Link to="/">Home</Link></li>
          <li className='dropdown'>
            
            <li className='drop'><a href="#" className='drop'>Pages <i className="fa-solid fa-chevron-right fa-rotate-90 fa-2xs"></i></a></li>
            <ul className={`dropLinks ${isDropdown ? 'open' : ''}` } onClick={toggleDropdown}>
              <li  className='no-hover'><Link to='/about' >About Us</Link></li>
              <li  className='no-hover'><Link to='/contact'>Contact Us</Link></li>
              <li  className='no-hover'><Link to='/Faq'>FAQ</Link></li>
              <li  className='no-hover'><Link to='/cart'>About Us</Link></li>
              <li  className='no-hover'><Link to='/wishlest'>Wistlest</Link></li>
              
              <li  className='no-hover'><Link to='/blogdetail'>BlogDetail</Link></li>
              <li  className='no-hover'><Link to='/blog'>Blog</Link></li>
              <li  className='no-hover'><Link to='/checkout'>Checkout</Link></li>




            </ul>
          </li>
          <li><Link to="/product">Shop</Link></li>
          <li><a href="#">Blog</a></li>

        </ul>

        <ul className='userCart' >
            
            <li><Link className='userCartLinks' to='/login'><FontAwesomeIcon icon={faUser}/>  </Link></li>
            <li><Link to="/cart" className='userCartLinks'><FontAwesomeIcon icon={faCartShopping} />{cart.length > 0 && (<span className='cart-length'>{cart.length}</span>)} </Link></li>

        </ul>
      </div> */}





<div className="navBar" id="navBar">
  <div className={`wrapper ${scrolled ? "scrolled":""}`}>
    <nav>
      <input type="checkbox" id="show-search" />
      <input type="checkbox" id="show-menu" />
      <label htmlFor="show-menu" className="menu-icon">
        <FontAwesomeIcon icon={faBars}/>
      </label>
      <div className="content">
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <div className=''>
        <ul className="links">
          <li>
          <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#" className="desktop-link">
             Pages&#x25BE;
            
            </a>
            <input type="checkbox" id="show-features" />
            <label htmlFor="show-features">Features</label>
            <ul>
              <li>
              <Link to='/about' >About Us</Link>
              </li>
              <li>
              <Link to='/contact'>Contact Us</Link>
              </li>
              <li>
              <Link to='/Faq'>FAQ</Link>
              </li>
              <li>
              <Link to='/cart'>About Us</Link>
              </li>
              <li><Link to='/wishlest'>Wistlest</Link></li>
            </ul>
          </li>
          <li>
          <Link to="/product">Shop</Link>

          </li>
          <li>
          <Link to='/blog'>Blog</Link>
          </li>
        </ul>
        </div>
      </div>
      
      <div className="addToCart">
        <p>
          <a href="#">H</a>
        </p>
        <p>
          <a href="#">H</a>
        </p>
      </div>
      <label htmlFor="show-search" className="search-icon">
        <FontAwesomeIcon icon={faSearch}/>
      </label>
      <form action="#" className="search-box">
        <input
          type="text"
          placeholder="Type Something to Search..."
          required=""
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit" className="go-icon" >
          q
        </button>
      </form>
    </nav>
  </div>
</div>


    </>
  );
};

export default Navbar;
