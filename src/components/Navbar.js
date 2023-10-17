import React, {useState} from 'react'
import Logo from '../assets/pizza.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from "react-router-dom"
import'../styles/Navbar.css';

function Navbar() {

  const [newLinks, setNewLinks] =useState (false);

  const toggleNavbar = () => {
    setNewLinks(!newLinks);
  }
  return (
    <div className="navbar">
      <div className="leftSide" id = {newLinks ? "open" : "close"}> 
      <img src ={Logo} alt ="pizza" ></img>
      <div className= "hiddenLinks">
      <Link to= '/'> Home </Link>
      <Link to= '/menu'> Menu </Link>
      <Link to= '/about'> About us </Link>
      <Link to= '/contact'> Contact us </Link>
      </div>
      </div>
      <div className="rightSide">
      <Link to= '/'> Home </Link>
      <Link to= '/menu'> Menu </Link>
      <Link to= '/about'> About us </Link>
      <Link to= '/contact'> Contact us </Link>
      <button onClick = {toggleNavbar}>
      <ReorderIcon />
      </button>
</div>
      </div>
      
  );
}

export default Navbar;
