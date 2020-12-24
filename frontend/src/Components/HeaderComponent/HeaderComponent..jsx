import React from 'react';
import './headerComponent.scss'
import Logo from '../../Assets/icons/cyf.jpeg'
//import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <a href='/'>
      <header className="header">
        <img className="header__logo" src={Logo} alt="" />
      </header>
    </a>
  );
}