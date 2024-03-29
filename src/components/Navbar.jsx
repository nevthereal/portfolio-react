import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center p-4 text-white h-24'>
      <p className='text-nevBlue text-3xl font-black font-[Montserrat]'>
        Neville Brem
      </p>
      <ul className='p-4 hidden md:flex gap-4'>
        <li>
          <a href='#about' className='nav-link'>
            About
          </a>
        </li>
        <li>
          <a href='#skills' className='nav-link'>
            Skills
          </a>
        </li>
        <li>
          <a href='#projects' className='nav-link'>
            Projects
          </a>
        </li>
        <li>
          <a href='#social' className='nav-link'>
            Social
          </a>
        </li>
        <li>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className='fixed md:hidden right-8 top-8 text-gray-300'
      >
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className='text-nevBlue w-full text-3xl font-black m-4 font-[Montserrat]'>
          Neville Brem
        </h1>
        <ul className='p-4'>
          <li className='p-4 border-b border-gray-600'>
            <a href='#about'>About</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a href='#social'>Social</a>
          </li>
          <li className='p-4'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
