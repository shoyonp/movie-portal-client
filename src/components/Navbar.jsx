import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user,userLogOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="allmovies">
        <li>All Movies</li>
      </NavLink>
      <NavLink to="addmovie">
        <li>Add Movie</li>
      </NavLink>
      <NavLink to="myfavorite">
        <li>My Favorites</li>
      </NavLink>
      <NavLink to="new">
        <li>New</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>
      <div className="navbar-end">
      <span className="text-4xl">
            {user && user.email ? (
              <div>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                    <img
                      title={user?.displayName}
                      className="w-14 rounded-full "
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ) : (
            //   <span><FaCircleUser /></span>
            <h4>no</h4>
            )}
          </span>
          
          <div>
          {user && user.email ? (
            <button
              onClick={userLogOut}
              className="btn border-none bg-green-700 text-white"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/auth/login"
              className="btn border-none bg-green-700 text-white"
            >
              Login
            </NavLink>
          )}
          </div>
      </div>
    </div>
  );
};

export default Navbar;
