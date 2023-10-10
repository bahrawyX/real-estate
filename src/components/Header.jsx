import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return <>
    <header className='py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
      {/* logo */}
          <Link to="/">
            <img src="../assests/img/logo.svg" alt="" />
          </Link>
          <div className='flex items-center gap-6'>
              <Link className='hover:text-violet-900 transition' to='/'>
                Our Products
              </Link>
          </div>
      <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to='/signin'>
          Sign In 
        </Link>
        <Link className=' bg-violet-700 hover:bg-violet-800 text-white px-4 py-3  transition' to='/signup'>
          Sign Up
        </Link>
      </div>

    </div>


    </header>
  
  
  </>;
};

export default Header;
