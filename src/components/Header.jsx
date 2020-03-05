import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';


export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
