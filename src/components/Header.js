import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/login">Login</Link>
  </div>
);

export default Header;
