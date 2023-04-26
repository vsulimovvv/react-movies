import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link to={'/'} className="inline-block text-xl mb-2">
              RMovies
            </Link>
            <p>© 2023</p>
          </div>
          <div className="flex items-center gap-[20px]">
            {/* eslint-disable-next-line  */}
            <a
              className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-black hover:bg-neutral-700 hover:text-white transition-all duration-200"
              href="https://t.me/vsulimovvv"
              target="_blank"
            >
              <FaTelegramPlane size={20} />
            </a>
            {/* eslint-disable-next-line  */}
            <a
              className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-black hover:bg-neutral-700 hover:text-white transition-all duration-200"
              href="https://github.com/vsulimovvv"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
