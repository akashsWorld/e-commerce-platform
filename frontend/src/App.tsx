import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {

  const isLoigin=true;
  const userName= 'Akash Biswas';

  return (
    <>
      <Navbar isLogin={isLoigin} userName={userName}/>
      <Outlet />
    </>
  );
};

export default App;
