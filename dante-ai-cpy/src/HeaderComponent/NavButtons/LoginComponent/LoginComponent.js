import React from 'react';

const LoginComponent = (props) => {
  return (
    <div>
      <a
        href='/login'
        className='inline-flex items-center justify-center relative box-border bg-transparent cursor-pointer px-4 py-2 border border-black rounded-md text-sm font-bold'
      >
        Login
      </a>
    </div>
  );
};

export default LoginComponent;
