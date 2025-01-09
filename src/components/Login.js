import React, { useState } from 'react'
import './Wishlest.css'
import image1 from '../banners-image/hero/about-hero.jpg'
import validator from 'validator'
import { HeroSection } from './Buttons'
import loginHero from '../banners-image/login.jpg'



const Login = () => {
    const [password, setPassword] = useState("");


    const passwordValidation = () => {

        if(validator.isStrongPassword(password, {
            minLength: 8,
            minNumbers: 1,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1
        })) {
            alert("Strong Password")
            
        }
        else {
            alert("Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.")
            setPassword("")
        }
    }

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
        
    // }
    
    return (
        <div className='my-5 py-5'>
            {/* <HeroSection heroBackground="loginHero"/> */}
        <div className='d-flex justify-content-center my-5'>
            <div className="login-container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={image1} alt="" />
                        <div className="text">
                            <span className="text-1">
                                Every new friend is a <br /> new adventure
                            </span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                    <div className="back">
                        <img class="backImg" src={image1} alt="" />
                        <div className="text">
                            <span className="text-1">
                                Complete miles of journey <br /> with one step
                            </span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input type="text" placeholder="Enter your email" required="" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required=""
                                        />
                                    </div>
                                    <div className="text">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" defaultValue="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">
                                        Don't have an account? <label htmlFor="flip">Sigup now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form">
                            <div className="title">Signup</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-user" />
                                        <input type="text" placeholder="Enter your name" required="" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input type="text" placeholder="Enter your email" required="" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required=""
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" defaultValue="Sumbit" onClick={passwordValidation}/>
                                    </div>
                                    <div className="text sign-up-text">
                                        Already have an account? <label htmlFor="flip">Login now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Login