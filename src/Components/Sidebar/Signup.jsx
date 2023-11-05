import React from 'react';
import './Signup.css';

import {RxCross2} from 'react-icons/rx'
const Signup = () => {
  return (
    <div className='signup_bar rounded fixed bottom-0 signup-bar px-2 py-4 mx-1   flex justify-between'>
      <button className="close-button">
        <span>
          <RxCross2 className='hover:bg-white/40 rounded-[50%]'/>
        </span>
      </button>
      <div>
        <p className='uppercase font-semibold text-white'>
          Preview on Spotify
        </p>
        <p className='text-white'>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>

      <button className="rounded-full text-white mt-4 px-3 bg-black font-semibold">
        Sign up free
      </button>
    </div>
  );
};

export default Signup;
