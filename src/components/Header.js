import React, { useState } from 'react';

function Header(props) {
  return (
    <header className="header">
    <img src="./assets/Images/headshot.jpg" />
    <h1 id="h1">Massar Sow </h1> 
    <nav>
      <ul>
        <li><a href="#About-Me">About Me</a></li>
        <li><a href="#Work">Work</a></li>
        <li><a href="#Contact-Me">Contact Me</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;