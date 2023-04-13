import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-52 shadow">
      <div className="flex-1">
        <Link to="/" className=" normal-case text-xl font-bold">
          MealApp
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Meals">Foods</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
