import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen  flex flex-col     sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full h-full md:max-w-md">
      <div className="px-5 py-7">
            <h2 className="text-center mb-5 text-4xl font-semibold text-violet-600">
              Sign In
            </h2>
            {/* Sign-up form */}
            <form action=""  className='flex flex-col  first-letter:'>
                    <input type="text"  placeholder='Email*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <input type="pass"  placeholder='Password*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                <div className='flex gap-x-2 mt-4'>
                      <button className='bg-violet-700 hover:bg-violet-800 text-white p-4 text-sm  w-full transition '>
                        Sign In
                      </button>
                      <button className='border p-4  border-violet-800   text-violet-800 w-full transition hover:text-violet-500 hover:border-violet-500 text-sm'>
                        <Link to='/signup'  >Sign Up ?</Link>
                      </button>
                    </div>
                  </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
