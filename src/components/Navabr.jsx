import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navabr = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () =>
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleActive);

    return () => {
      window.removeEventListener('scroll', toggleActive);
    };
  }, []);

  return (
    <header
      className={`py-4 z-[100] fixed w-full transition-all duration-200 ${
        isActive ? 'bg-black' : ''
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between ">
          <h1 className="text-zinc-100 text-bold text-2xl md:text-4xl cursor-pointer">
            <Link to="/"> RMovies</Link>
          </h1>
          <div>
            <button className="text-white pr-4">Sign In</button>
            <button className="bg-white text-black px-3 md:px-6 py-2 rounded cursor-pointer">
              Sign Un
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navabr;
