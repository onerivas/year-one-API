import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <Link to='/'>Home</Link>
      </ul>
    </div>
  );
}

export default Nav;
