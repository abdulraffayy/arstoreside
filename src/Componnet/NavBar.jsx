import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logoimage from '../../public/Assetes/logo.03a41d097ba0670610e0.webp';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav-bar flex items-center justify-between h-full bg-rose-100 w-full border-b border-rose-400 p-2">
        <div className="logo ml-3">
          <img src={logoimage} className="h-[45px] w-[270px]" alt="logo" />
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-black mr-3 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center justify-center gap-12 text-black cursor-pointer absolute md:relative bg-rose-100 md:bg-transparent top-[60px] left-0 right-0 md:top-0 md:p-0 p-5`}>
          <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-12">
            <li className="hover:text-red-400"><Link to="/home">Home</Link></li>
            <li className="hover:text-red-400"><Link to="/details/:id">Shop</Link></li>
            <li className="hover:text-red-400"><Link to='/testimonial'>Testimonial</Link></li>
            <li className="hover:text-red-400">About Us</li>
            <li className="hover:text-red-400"><Link to='/footer'>Contact Us</Link></li>
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-end">
          <button className="rounded-md text-white outline-1 w-[100px] bg-red-400 p-3">
          Let&apos;s Talk
          </button>
        </div>
      </div>

     
    </>
  );
};

export default NavBar;
