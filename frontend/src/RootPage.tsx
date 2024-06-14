import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const RootPage = () => {
  const isLoigin = true;
  const userName = "Akash Biswas";
  return (
    <>
      <Navbar isLogin={isLoigin} userName={userName} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootPage;
