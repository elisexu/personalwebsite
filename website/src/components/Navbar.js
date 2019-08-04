import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <header>
      <h1 id="name"> elise xu</h1>
      <div>
      <hr />
      </div>
      <div id="links">
      <nav>
        <li><a href='#about'>about</a></li>
        <li><a href='#projects'>projects</a></li>
        <li><a href={process.env.PUBLIC_URL + 'resume.pdf'} target="_blank">resume</a></li>
      </nav>
      </div>
      <hr />
      </header>
    )
  }
}

export default NavBar;
