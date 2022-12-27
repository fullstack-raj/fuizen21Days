import React from 'react'
import Navigation from './Navigation';
import logo from '../../Assets/Images/logo.svg';
import './Header.scss';
//import {styles} from './Header.scss';

const Header = (props) => {
  return (
    <>
      <div className="main-header">
        <div className="main-header-logo">
          {/* <img src={logo} /> */}
          <h1>Logo</h1>
        </div>
        <div className="main-header-search">
          <input type="text" className="" placeholder='' />
        </div>
        <div className="main-header-nav">
          <Navigation props={props} />
        </div>

      </div>

    </>
  )
}

export default Header