import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <header className="navBar">
        <h1>Chili Beats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/library'>Library</Link>
        </nav>
      </header>
    )
  }
}

export default Nav;