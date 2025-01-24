import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Buttons.css'; // Import your CSS for advanced styles
import image from '../banners-image/banner2.jpg'

const NewArrival = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // Countdown starting from 1 hour (3600 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimeLeft(3600); // Reset countdown to 1 hour
      }
    }, 1000); // Update countdown every second
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const bannerContainer = {
    /* Background gradient ko comment kiya gaya hai */
    // background: "linear-gradient(135deg, #C19A6B, #D1A77C, #C19A6B)",
    
    background: `url(${image}) no-repeat center center/cover`,
    /* Alternative background color ko comment kiya gaya hai */
    // backgroundColor: "#C19A6B",
  
    height: "500px", // Units ko string mein dena zaroori hai
    padding: "40px 20px", // Padding bhi string mein
    borderRadius: "0px", // border-radius => borderRadius
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // box-shadow => boxShadow
    animation: "infiniteMove 3s ease-in-out infinite", // animation property
  };
  

  return (
    <div className="banner-container" style={bannerContainer}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={12} className="text-center text-light">
            <h1 className="banner-title">Limited Time Offer</h1>
            <div className="countdown-boxes">
              <div className="countdown-box">
                <div className="time-box">{hours < 10 ? `0${hours}` : hours}</div>
                <div className="time-label">Hours</div>
              </div>
              <div className="countdown-box">
                <div className="time-box">{minutes < 10 ? `0${minutes}` : minutes}</div>
                <div className="time-label">Minutes</div>
              </div>
              <div className="countdown-box">
                <div className="time-box">{seconds < 10 ? `0${seconds}` : seconds}</div>
                <div className="time-label">Seconds</div>
              </div>
            </div>
            <Button variant="primary" className="banner-button">
              Shop Now
            </Button>
          </Col>
          {/* <Col lg={6} md={12} className="text-center">
            <img
              src={image} // Replace with your image URL
              alt="Banner"
              className="banner-image"
            />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};







export default NewArrival