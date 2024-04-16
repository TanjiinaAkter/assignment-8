import { Link, NavLink, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Header.css";
import image from "../../../public/assets/Logo.png";

const Header = () => {
  const location = useLocation();

  const links = (
    <nav className="">
      <ul className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <li>
          <NavLink className="nav-active" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-active" to="/donation">
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-active" to="/statistics">
            Statistics
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  return (
    <div
      className={` {location.pathname === "/" && <div className="bg-add"></div>}
    `}>
      <div className="navbar lg:mx-auto lg:max-w-5xl">
        <div className="navbar-start flex ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <div className="flex w-[28rem] lg:w-auto justify-center items-center">
            <Link to="/">
              {" "}
              <img className="max-w-[13rem] w-[10rem]" src={image} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal px-1">{links}</ul>
        </div>
      </div>
      <div>
        {location.pathname === "/" && (
          <Banner></Banner>
        )}
      </div>
    </div>
  );
};

export default Header;
