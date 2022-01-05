import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import logo from '../../assets/logo.png'
import styles from './module.style.css'

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img className='logo' src={logo}/>
        </a>
      </div>
      <ul className='center-nav'>
        <span>
          <li><NavLink to="/services">Услуги</NavLink></li>
          <li><NavLink to="/company">О компании</NavLink></li>
          <li><NavLink to="/contacts">Контакты</NavLink></li>
        </span>
      </ul>
      <ul className='right-nav'>
        <li>
          +7 (965) 963 93 13
        </li>
        <li>
          <button>Войти</button>
        </li>
      </ul>
      {/*<Routes>*/}
      {/*  <Route path='/' element={} />*/}
      {/*  <Route path='/services' element={<Service />}/>*/}
      {/*  <Route path='/company' element={<Company />}/>*/}
      {/*  <Route path='/contacts' element={<Contacts />}/>*/}
      {/*</Routes>*/}
    </header>
  );
};

export default Header;