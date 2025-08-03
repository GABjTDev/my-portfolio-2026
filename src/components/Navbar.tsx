// components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className='container-1280'>
        <ul className="flex justify-center gap-6 p-4">
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About Me
            </a>
          </li>
          <li>
            <a href="#technologies" className="text-gray-700 hover:text-blue-600 transition">
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;