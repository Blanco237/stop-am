import React from "react";
import { FaRegEnvelope } from 'react-icons/fa'
import { Link } from "react-router-dom";

import logo from './StopAm.svg';


const Header = () => {
  return (
    <header className="w-full fixed z-50">
      <nav className="w-full flex justify-between items-center md:px-16 px-4 py-4">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <button className="px-7 py-2 bg-primary-dark shadow-md rounded text-white transition-all hover:bg-accent-dark active:shadow-sm">
          SIGN IN
        </button>
      </nav>
    </header>
  );
};

export default Header;
