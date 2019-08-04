import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header>
      <h1> elise xu</h1>
      <div>
      <hr />
      </div>
      <nav>
        <li><a href='#about'>about</a></li>
        <li><a href='#projects'>projects</a></li>
        <li><a href={process.env.PUBLIC_URL + 'resume.pdf'} target="_blank">resume</a></li>
      </nav>
      <hr />
      </header>
    )
  }
}

export default NavBar;
