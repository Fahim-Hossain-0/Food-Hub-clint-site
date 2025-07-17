import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
  const { user, signOutUser} = use(AuthContext)
  console.log(user);
  const Links = <>
    <NavLink to="/" className="font-medium text-base">Home</NavLink>
    <NavLink to="/allGroups" className="font-medium text-base">All Groups</NavLink>
    <NavLink to="/create-group" className="font-medium text-base">Create Group</NavLink>
    <NavLink to="/myGroup" className="font-medium text-base">My Groups</NavLink>
  </>;

const handleSignOut=()=>{
  signOutUser()
  .then()
  .catch()
}
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-100 rounded-box">
            {Links}
          </ul>
        </div>
        <Link to='/' className="font-bold text-3xl">Hobby</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {Links}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {user ? (
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
  <img
                src={user.photoURL}
            alt="Profile"
            id="user-avatar"
            style={{ cursor: 'pointer' }}
          /> 
        <button onClick={handleSignOut} className="btn btn-primary">Sign out</button>
      </div>

    </div>
    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
      <li><a>{user.displayName}</a></li>
      <li><a onClick={handleSignOut}>Logout</a></li>
    </ul>
    <Tooltip
   anchorSelect="#user-avatar"
        content={user.displayName}
        place="bottom"
        // className="custom-tooltip"
        style={{
    backgroundColor: '#EFEFEF',
    color: '#64748b', // yellow
    fontSize: '14px',
    padding: '6px 10px',
    borderRadius: '6px',
  }}

/> */}

  </div>
) : (
  <Link to='/auth/login' className="btn btn-primary">Login</Link>
)}

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
