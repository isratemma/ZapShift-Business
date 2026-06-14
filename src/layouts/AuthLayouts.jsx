import React from 'react';
import { Outlet, Link } from 'react-router';
import authImage from '../assets/authImage.png';
import Logo from '../components/Logo/Logo';

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Top logo bar */}
      <div className="px-8 py-5 bg-white shadow-sm">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center gap-12 px-6 py-12 md:px-16">
        {/* Form side */}
        <div className="w-full max-w-md">
          <Outlet />
        </div>

        {/* Image side */}
        <div className="hidden lg:block w-full max-w-md">
          <img src={authImage} alt="Auth" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
