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

  return (
    <div className="banner-container">
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
          <Col lg={6} md={12} className="text-center">
            <img
              src={image} // Replace with your image URL
              alt="Banner"
              className="banner-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};







export default NewArrival