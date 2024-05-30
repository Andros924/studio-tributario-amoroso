import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ContactInfo from './ContactInfo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <Logo />
        <NavMenu/>
        <ContactInfo />
      </div>
    </header>
  );
};

export default Header;
