import React from "react";
import { Link } from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  return <nav>
    <ul>
      <li className="nav-link active"><Link to='/'>Home</Link></li>
      <li className="nav-link "><Link to='/task-manager'>Task Manager</Link></li>
      <li className="nav-link "><Link to='/about'>About</Link></li>
      <li className="nav-link " > <Link to='/contact'>Contact</Link></li >
    </ul>
  </nav>;
};

export default Nav;
