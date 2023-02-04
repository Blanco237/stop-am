import React from "react";
import { FaRegEnvelope } from 'react-icons/fa'
import { Link } from "react-router-dom";
import useUser from "../../../Context/useUser";
import { loginWithGoogle } from "../../../firebase/firebase";

import logo from './StopAm.svg';


const Header = () => {

  const { user } = useUser();

 const signIN = async () => {
    const res = await loginWithGoogle(1024);

 }

  return (
    <header className="w-full fixed z-50">
      <nav className="w-full flex justify-between items-center md:px-16 px-4 py-4">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <button onClick={signIN} className="px-7 py-2 bg-primary-dark shadow-md rounded text-white transition-all hover:bg-accent-dark active:shadow-sm">
          {user? `SIGN OUT` : `SIGN IN`}
        </button>
      </nav>
    </header>
  );
};

export default Header;
