import React from 'react'
import {Link} from 'react-router-dom'
import walking from '../images/converse.jpg'
import "./Home.css"


export default function Home() {
  return (
    <div className="home-container">
      <img src ={walking} alt="Background with Shoes on Display" />
        <h1>Achilles</h1>
        <h2>Step with Style</h2>
        <Link to="/Products">
        <button class = "shop"> Shop Now</button>
        </Link>
        <Link to="/EntryForm">
          <button class = "shop"> Temp Data Entry Button</button>
        </Link>
        <Link to="/ProfileForm">
          <button class = "shop"> Temp Profile Button</button>
        </Link>
        <Link to="/Cart">
          <button class = "shop"> Temp Shopping Cart</button>
        </Link>
        <Link to="/Admin">
          <button class = "shop"> Temp Admin Portal</button>
        </Link>
    </div> 
  )
}

