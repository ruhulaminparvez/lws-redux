import React from 'react';
import logo from '../Assets/images/logo.png';

const Navbar = () => {
  return (
    <>
     <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="/">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a href="/" className="navHome" id="lws-home"> Home </a>
            <a href="/" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;