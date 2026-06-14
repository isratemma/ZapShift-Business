import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const AuthLayouts = () => {
  return (
    <div>
      <Logo></Logo>
      <div>
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <img src={authImage} alt="Auth Background" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
