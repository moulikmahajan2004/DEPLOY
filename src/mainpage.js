import React from 'react';
import './mainpage.css';
import logoImage from './main.jpg';
import {auth} from './firebase'
import { signOut } from 'firebase/auth';
import {Link} from 'react-router-dom';

// Import necessary libraries and dependencies
// (Make sure to import 'auth' and 'useNavigate' correctly)


const logout = () => {
  // Assuming 'signOut' is a function that signs the user out
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    
      console.log("Signed out successfully");
  
    })
    .catch((error) => {
      // An error happened.
      console.error("Sign-out error:", error);
    });
};

function mainpage() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>BROCODE</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><button onClick={logout}>
            <Link to='/'>Logout</Link></button></li>
        </ul>
      </nav>

      
        <div className="text">
          <h2>Welcome to the Galaxy</h2>
          <p>
            The galaxy is a vast and mysterious place filled with billions
            of stars, planets, and celestial wonders waiting to be explored.
            Whether you're an astronomer or an adventurer, there's always
            something new to discover.
          </p>
        </div>
   <img src={logoImage} className='image'></img>
    </>
  );
}

export default mainpage;
