import React from 'react'
import {Link} from "react-router-dom"
import pizzaBackground from '../../assets/pizzaBackground.jpg';
import '../../styles/Home.css';

function HomePage() {
  return (
    <div className="Homepage" style ={{ backgroundImage: `url(${pizzaBackground})` }}>
      <div class = "headerContainer">
        <h1> Papito's Pizza Palace</h1>
        <p>YUM YUM</p>
        <Link to ='/menu'>
          <button>Order Now</button> 
        </Link>
     
      </div>
    </div>
  );
}

export default HomePage
