import React, { useState }  from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Card_Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); 
  };


  const redirectTOAbout = () => {
    navigate("/About");
  };

  const redirectTOHome = () => {
    navigate("/");
  };

  const redirectTOProtfolio = () => {
    navigate("/Protfolio");
  };

  const redirectTOContact = () => {
    navigate("/Contact");
  };

  return (
    <div className='Card_Main flex h-full w-full mt-8'>
      <div className='flex w-11/12 flex-row justify-between m-auto'>
        <div className='Card_logo'>
          <p className='Card_name '> Abhiram.</p>
        </div>
        <div className='md:flex text-4xl pt-2 cursor-pointer flex-col w-auto  xl:hidden ' onClick={toggleDropdown}>
          <div className='icon '>
          <FiMenu />
          </div>
          {showDropdown && (
            <div className="dropdown-menu flex flex-col w-auto m-auto text-base bg-white p-12 mt-5 text-center ">
              <p className='mb-2' onClick={redirectTOHome}>Home</p>
              <p className='mb-2' onClick={redirectTOAbout}>About</p>
              <p className='mb-2' onClick={redirectTOProtfolio}>Portfolio</p>
              <p className='mb-2'>Blog</p>
              <p className='mb-2' onClick={redirectTOContact}>Contact</p>
            </div>
          )}
        </div>
        <div className='Card_Content  flex-row justify-between w-6/12 m-auto text-base md:hidden xl:flex'>
          <p className={location.pathname === '/' ? 'active' : ''} onClick={redirectTOHome}>Home</p>
          <p className={location.pathname === '/About' ? 'active' : ''} onClick={redirectTOAbout}>About</p>
          <p className={location.pathname === '/Protfolio' ? 'active' : ''} onClick={redirectTOProtfolio}>Portfolio</p>
          <p>Blog</p>
          <p className={location.pathname === '/Contact' ? 'active' : ''} onClick={redirectTOContact}>Contact</p>
        </div>
        <div className='Card_Talk text-white w-1/6  flex-row justify-center p-4  xl:flex md:hidden'>
          <div>
            <p >Let's Talk </p>
          </div>
          <div>
            <p><FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
