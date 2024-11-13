// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-blue-900 text-white">
    <nav className="flex space-x-4">
      <a href="#" className="hover:text-gray-300">About</a>
      <a href="#" className="hover:text-gray-300">Videos</a>
      <a href="#" className="hover:text-gray-300">Podcasts</a>
      <a href="#" className="hover:text-gray-300">Courses</a>
      <a href="#" className="hover:text-gray-300">Blog</a>
    </nav>
    <div className="flex space-x-3">
      {/* Aquí puedes agregar íconos de redes sociales usando react-icons */}
    </div>
  </header>
);

export default Header;
