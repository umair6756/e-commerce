import React, { useState, useRef } from "react";
import './Buttons.css'

const APIKey = ({ imageSrc, zoomLevel = 2 }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [showMagnifier, setShowMagnifier] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div className="magnifier-wrapper">
      {/* Original Image Container */}
      <div
        className="original-image-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageSrc} alt="Product" className="original-image" />
      </div>

      {/* Magnified View Container */}
      {showMagnifier && (
        <div
          className="magnified-view"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: backgroundPosition,
          }}
        ></div>
      )}
    </div>
  );
};

export default APIKey;
