import React, { useState } from "react";
import siteIcon from "./../assets/site-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParam, setSerchParam] = useState("");

  const onSearch = () => {
    // TODO: handle the search param;
  };

  return (
    <nav className="flex flex-row justify-between max-h-20 ">
      <div className="h-full w-1/5 ">
        <img
          onClick={() => navigate("/")}
          className="h-20 w-20 min-w-20 p-1 cursor-pointer"
          src={siteIcon}
          alt="icon"
        />
      </div>
      <div className="h-20 w-4/5  flex justify-end">
        {/* TODO: Fix the Style of the form */}
        {/* <label
          className="absolute top-7 left-7 focus:top-2"
          htmlFor="search_bar"
        >
          Search
        </label> */}
        <input
          name="search_bar"
          className="h-12 rounded-lg min-w-[20vw] w-[40vw] inline-block my-4 mx-4 p-3 border-solid border-gray-400 border-2 focus:outline-none  "
          type="text"
          value={searchParam}
          onChange={(eve) => setSerchParam(eve.target.value)}
          placeholder="Some Text"
        />
        <div className="">
          <Button content="Log In" className={'bg-orange-500 hover:bg-orange-700 transition-colors ease-in duration-100 text-white font-oxygen font-medium'} onClick={() => {}} />
          <Button content="Sign Up" className={'transit'} onClick={() => {}} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
