import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='signup_bar fixed bottom-0 signup-bar px-4 py-4 mx-1 flex justify-between'>
      <div>
        <p className='uppercase font-semibold text-white'>
          Preview on Spotify
        </p>
        <p className='text-white'>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>

      <button className="rounded-full text-white mt-4 px-4 bg-black font-semibold">
        Sign up free
      </button>
    </div>
  );
};

export default Signup;