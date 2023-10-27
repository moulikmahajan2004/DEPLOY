import React, { useState, useEffect } from "react";
import "./mainpage.css";
import logoImage from "./main.jpg";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const nav = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("userLoggedIn"));

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("userLoggedIn"); // Clear the user info from local storage
        setLoggedIn(false); // Set loggedIn to false when the user logs out
        console.log("Signed out successfully");
        nav("/log");
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);
      });
  };

  useEffect(() => {
    // Check the authentication status when the component mounts
    if (auth.currentUser) {
      localStorage.setItem("userLoggedIn", "true"); // Store user info in local storage
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {loggedIn ? ( // Render the content only if the user is logged in
        <nav className="navbar">
          <div className="logo">
            <h1>BROCODE</h1>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">
                <Link to="/stripe">Services</Link>
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : (
        <p>You cannot access this page. Please log in first.</p>
      )}

      {loggedIn && ( // Render the content only if the user is logged in
        <div className="text">
          <h2>Welcome to the Galaxy</h2>
          <p>
            The galaxy is a vast and mysterious place filled with billions of
            stars, planets, and celestial wonders waiting to be explored.
            Whether you're an astronomer or an adventurer, there's always
            something new to discover.
          </p>
        </div>
      )}

      {loggedIn && ( // Render the content only if the user is logged in
        <img src={logoImage} className="image" alt="Main Logo" />
      )}
    </>
  );
}

export default Mainpage;
