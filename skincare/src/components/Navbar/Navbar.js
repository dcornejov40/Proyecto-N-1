import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Brand</Link>
      <Link to="/item/1">Item 1</Link>
      <Link to="/item/2">Item 2</Link>
      {/* Add more links for other categories */}
    </nav>
  );
};

export default Navbar;
