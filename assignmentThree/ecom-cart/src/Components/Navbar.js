import React from 'react';
import logo from '../Assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { showContent } from "../redux/actions/showContent";

const Navbar = () => {
  const [clickCart, setClickCart] = React.useState(false);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.counter);

  const handleViewChange = (e) => {
    e.preventDefault();
    dispatch(showContent(setClickCart(!clickCart)));
  };
  return (
    <>
     <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="/">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a href="/" className="navHome" id="lws-home"> Home </a>
            <a href="/" className="navCart" id="lws-cart" onClick={(e) => handleViewChange(e)}>
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{counter > 0 ? counter : '0'}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;