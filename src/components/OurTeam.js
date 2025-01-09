// src/OurTeam.js
import React from "react";
import './AboutUs.css';  // Import the CSS for advanced styling
import image1 from '../banners-image/2.jpg'

const OurTeam = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "John Doe", 
      role: "CEO", 
      image: image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      role: "Developer", 
      image:  image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    { 
      id: 3, 
      name: "Mark Lee", 
      role: "Designer", 
      image:  image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    { 
      id: 4, 
      name: "Emily Johnson", 
      role: "Manager", 
      image:  image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="member-image"/>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="social-icons">
              <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
