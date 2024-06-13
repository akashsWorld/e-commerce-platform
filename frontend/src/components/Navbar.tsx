import React, { useState } from "react";
import siteIcon from "./../assets/site-icon.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";

const Navbar = ({
  isLogin,
  userName,
}: {
  isLogin: boolean;
  userName: string;
}) => {
  const navigate = useNavigate();
  const [searchParam, setSerchParam] = useState("");
  const [onHover, setOnHover] = useState(false);


  const navItems:{pageName:string,itemIcon:React.ReactNode,routeLink:string}[] = [
    {
      pageName:'Orders',
      itemIcon:<FaBagShopping/>,
      routeLink:'/orders'
    },
    {
      pageName:'Gift Cards',
      itemIcon:<MdCardGiftcard/>,
      routeLink:'/'
    },
    {
      pageName:'Wish list',
      itemIcon:<BsStars/>,
      routeLink:'/'
    }
  ]

  const onSearch = () => {
    // TODO: handle the search param;
  };

  return (
    <nav className="flex flex-row justify-between max-h-20 ">
      <div className="h-full w-1/5 flex cursor-pointer justify-center items-center " onClick={() => navigate("/")}>
        <img
          className="h-20 w-20 min-w-20 p-1 "
          src={siteIcon}
          alt="icon"
        />
        <h2 className="font-oxygen font-bold text-2xl text-gray-500">Swingkart</h2>
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
        {isLogin ? (
          <div className="flex my-3 mx-5 w-44 flex-col overflow-visible cursor-pointer ">
            <span
              className={`user-info ${onHover?"user-info__hover":''}`}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onClick={() => setOnHover(true)}
              onBlur={() => setOnHover(false)}
            >
              <p>
                <MdOutlineAccountCircle className="h-full" />
              </p>
              <p>{userName}</p>
              <p className="transition-all duration-150">
                {onHover ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </span>
            <div className={`${onHover?'block':'hidden'} hover:block h-36 w-fit p-3 `} onMouseOver={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)}>
              {navItems.map((items,indx)=>
              <div className="text-lg font-oxygen font-medium flex justify-start gap-2 p-2 hover:bg-blue-300 items-center">{items.itemIcon}
                <Link to={items.routeLink}><p>{items.pageName}</p></Link>
              </div>)}
            </div>
          </div>
        ) : (
          <div className="">
            <Button
              content="Log In"
              className={
                "bg-orange-500 hover:bg-orange-700 transition-colors ease-in duration-100 text-white font-oxygen font-medium"
              }
              onClick={() => {}}
            />
            <Button
              content="Sign Up"
              className={"transit"}
              onClick={() => {}}
            />
          </div>
        )}
        <Link to={''} className="flex my-3 mx-5 min-w-24 gap-2 cursor-pointer justify-center items-center border-2 p-2 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white transition-color duration-150 ease-out">
          <LuShoppingCart className="w-6 h-full" />
          <p className="text-xl font-oxygen font-normal">Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
