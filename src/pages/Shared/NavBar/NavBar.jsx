import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../components/Logo/Logo';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await logOut();
    navigate('/auth/login');
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">Services</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Start — hamburger + logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl p-0">
          <Logo />
        </NavLink>
      </div>

      {/* Center — nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {links}
        </ul>
      </div>

      {/* End — auth buttons */}
      <div className="navbar-end flex items-center gap-3">
        <NavLink
          to="/rider"
          className="hidden md:inline-flex border border-[#03373D] text-[#03373D] hover:bg-[#03373D] hover:text-white font-semibold px-5 py-2 rounded-full text-sm transition-all duration-200"
        >
          Be a Rider
        </NavLink>

        {user ? (
          /* Logged-in state: avatar + name + sign out */
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#CAEB66]"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#CAEB66] flex items-center justify-center font-bold text-black text-sm">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden md:block text-sm font-semibold text-gray-700 max-w-[120px] truncate">
                  {user.displayName || user.email}
                </span>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 mt-3 w-48 p-2 shadow border border-gray-100">
                <li className="px-3 py-2 text-xs text-gray-400 border-b border-gray-100 mb-1 truncate">
                  {user.email}
                </li>
                <li>
                  <NavLink to="/dashboard" className="text-sm">Dashboard</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-sm text-red-500 hover:text-red-600 w-full text-left"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* Logged-out state: Sign In button */
          <NavLink
            to="/auth/login"
            className="bg-[#CAEB66] hover:bg-[#b5dc2a] text-black font-semibold px-5 py-2 rounded-full text-sm transition-all duration-200"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
