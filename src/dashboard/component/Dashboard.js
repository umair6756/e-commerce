import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBlog, faBuilding, faEye, faGift, faLightbulb, faMessage, faMoon, faSearch, faShieldHeart, faShoppingBag, faShoppingCart, faStore, faSun, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {


    const [showSidebar, setShowSidebar] = useState(false);
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Apply the theme to the 'html' element
    document.documentElement.setAttribute('data-theme', theme);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    return (
        <div className="home-container">
            <header>
                <div className="logosec">
                    <div className="logo">GeeksForGeeks</div>
                    {/* <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                        className="icn menuicn"
                        id="menuicn"
                        alt="menu-icon"
                        onClick={toggleSidebar}
                    /> */}
                    <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className='fs-3' />
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search" />
                    <div className="searchbtn">
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '20px' }}

                        />
                    </div>
                </div>
                <div className="message">
                    <div className="circle" />
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                        className="icn"
                        alt=""
                    />
                    <div className="dp">
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                            className="dpicn"
                            alt="dp"
                        />
                    </div>
                </div>
            </header>


            <div className="main-container">
                <div className={`navcontainer ${showSidebar ? "navclose" : ""}`}>
                    <nav className="nav">
                        <div className="nav-upper-options">
                           

                            <div className="nav-option option1">

                                    <FontAwesomeIcon icon={faTableColumns} />
                                    <h3> Dashboard</h3>
                            </div>
                            
                            <Link to="/productpage">
                            <div className="option2 nav-option">
                                <FontAwesomeIcon icon={faGift} />
                                <h3 > Products</h3>
                            </div>
                            </Link>

                            <Link to="/blogpage">
                            <div className="nav-option option3">
                                <FontAwesomeIcon icon={faBlogger} />
                                <h3> Blogs</h3>
                            </div>
                            </Link>

                            <Link to="/orderpage">
                            <div className="nav-option option4">
                                <FontAwesomeIcon icon={faStore} />
                                <h3> Orders</h3>
                            </div>
                            </Link>
                            <div className="nav-option option5">
                                <FontAwesomeIcon icon={faMessage} />
                                <h3>Messages</h3>
                            </div>
                            <div className="nav-option option6">
                                <FontAwesomeIcon icon={faShieldHeart} />
                                <h3> Reviews</h3>
                            </div>
                            <div className="nav-option logout">
                                <FontAwesomeIcon icon={faBuilding} />
                                <h3>Others</h3>
                            </div>

                            <div className='toggle-switch' style={{ paddingBottom: "5rem" }}>
                                <label className=" ">
                                    <input class='toggle-checkbox' type='checkbox' onClick={toggleTheme}></input>
                                    <div class='toggle-slot '>
                                        <div class='sun-icon-wrapper'>
                                            <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"><FontAwesomeIcon icon={faLightbulb} className='iconify sun-icon' /></div>
                                        </div>
                                        <div class='toggle-button'></div>
                                        <div class='moon-icon-wrapper'>
                                            <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"><FontAwesomeIcon icon={faMoon} className='iconify moon-icon' /> </div>
                                        </div>
                                    </div>
                                </label>

                            </div>
                        </div>
                    </nav>

                </div>
                <div className="main">
                    <div className="searchbar2">
                        <input type="text" name="" id="" placeholder="Search" />
                        <div className="searchbtn">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className="box-container" style={{ color: 'white' }}>
                        <div className="box box1">
                            <div className="text">
                                <h2 className="topic-heading">60.5k</h2>
                                <h2 className="topic">Article Views</h2>
                            </div>
                            {/* <img
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                                alt="Views"
                            /> */}
                            <FontAwesomeIcon icon={faStore} className='box-icon' />
                        </div>
                        <div className="box box2">
                            <div className="text">
                                <h2 className="topic-heading my-0 py-0">15</h2>
                                <h2 className="topic">Blogs</h2>
                            </div>
                            <FontAwesomeIcon icon={faBlogger} className='box-icon' />
                        </div>
                        <div className="box box3">
                            <div className="text">
                                <h2 className="topic-heading">320</h2>
                                <h2 className="topic">Reviews</h2>
                            </div>
                            <FontAwesomeIcon icon={faGift} className='box-icon' />
                        </div>
                        <div className="box box4">
                            <div className="text">
                                <h2 className="topic-heading">70</h2>
                                <h2 className="topic">Orders</h2>
                            </div>
                            <FontAwesomeIcon icon={faShoppingCart} className='box-icon' />
                        </div>
                    </div>
                    <div className="report-container">
                        <div className="report-header">
                            <h1 className="recent-Articles">Recent Articles</h1>
                            <button className="view">View All</button>
                        </div>
                        <div className="report-body">
                            <div className="report-topic-heading">
                                <h3 className="t-op">Article</h3>
                                <h3 className="t-op">Views</h3>
                                <h3 className="t-op">Comments</h3>
                                <h3 className="t-op">Status</h3>
                            </div>
                            <div className="items">
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 73</h3>
                                    <h3 className="t-op-nextlvl">2.9k</h3>
                                    <h3 className="t-op-nextlvl">210</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 72</h3>
                                    <h3 className="t-op-nextlvl">1.5k</h3>
                                    <h3 className="t-op-nextlvl">360</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 71</h3>
                                    <h3 className="t-op-nextlvl">1.1k</h3>
                                    <h3 className="t-op-nextlvl">150</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 70</h3>
                                    <h3 className="t-op-nextlvl">1.2k</h3>
                                    <h3 className="t-op-nextlvl">420</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 69</h3>
                                    <h3 className="t-op-nextlvl">2.6k</h3>
                                    <h3 className="t-op-nextlvl">190</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 68</h3>
                                    <h3 className="t-op-nextlvl">1.9k</h3>
                                    <h3 className="t-op-nextlvl">390</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 67</h3>
                                    <h3 className="t-op-nextlvl">1.2k</h3>
                                    <h3 className="t-op-nextlvl">580</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 66</h3>
                                    <h3 className="t-op-nextlvl">3.6k</h3>
                                    <h3 className="t-op-nextlvl">160</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 65</h3>
                                    <h3 className="t-op-nextlvl">1.3k</h3>
                                    <h3 className="t-op-nextlvl">220</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard