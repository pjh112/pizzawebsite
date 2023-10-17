import React from 'react'
import AboutPizza from '../../assets/AboutPizza.webp';
import '../../styles/About.css';


function About() {
  return (
    <div className= "about">
      <div className= "aboutTopPart"
style ={{ backgroundImage: `url(${AboutPizza})` }}>
      </div>
      <div className="aboutBottom">
        <h1>About Papitos Pizza</h1>
        <p>We are a family owned pizza shop established in 2004 that loves making delicious pizzas for everyone to enjoy! Located in the the Heart of Baltimore near the Inner Harbor. Fresh ingredients and all different kind of sauces available!</p>
      </div>
    </div>
  )
}

export default About
