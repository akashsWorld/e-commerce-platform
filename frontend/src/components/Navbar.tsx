import React, { useState } from "react";
import siteIcon from "./../assets/site-icon.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsStars, BsShopWindow } from "react-icons/bs";
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

  const navItems: {
    pageName: string;
    itemIcon: React.ReactNode;
    routeLink: string;
  }[] = [
    {
      pageName: "Orders",
      itemIcon: <FaBagShopping />,
      routeLink: "/orders",
    },
    {
      pageName: "Gift Cards",
      itemIcon: <MdCardGiftcard />,
      routeLink: "/",
    },
    {
      pageName: "Wish list",
      itemIcon: <BsStars />,
      routeLink: "/",
    },
  ];


  const onSearch = (eve: React.KeyboardEvent<HTMLInputElement>) => {
    if (eve.key === "Enter") {

      console.log('Enter Pressed')
    }
  };

  return (
    <nav className="flex flex-row justify-between max-h-20 ">
      <div
        className="h-full w-1/5 flex cursor-pointer justify-center items-center "
        onClick={() => navigate("/")}
      >
        <img className="h-20 w-20 min-w-20 p-1 " src={siteIcon} alt="icon" />
        <h2 className="font-oxygen font-bold text-2xl text-gray-500">
          Swingkart
        </h2>
      </div>
      <div className="h-20 w-4/5  flex justify-end">
        <input
          name="search_bar"
          className="h-12 rounded-lg min-w-[20vw] w-[40vw] inline-block my-4 mx-4 p-3 border-solid border-gray-400 border-2 focus:outline-none  "
          type="text"
          value={searchParam}
          onChange={(eve) => setSerchParam(eve.target.value)}
          placeholder="Some Text"
          onKeyUp={onSearch}
        />
        {isLogin ? (
          <div className="flex justify-between">
            <div className="flex my-3 mx-5 w-fit flex-col cursor-pointer overflow-visible">
              <div
                className={`user-info ${onHover ? "user-info__hover" : ""}`}
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
              </div>
              <div
                className={`${
                  onHover ? "block" : "hidden"
                } hover:block h-fit w-fit z-10 border shadow-lg rounded-lg bg-white`}
                onMouseOver={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
              >
                {navItems.map((items, indx) => (
                  <div
                    key={indx}
                    className="text-lg font-oxygen font-medium flex justify-start gap-2 p-4 hover:bg-blue-300 items-center box-border"
                  >
                    {items.itemIcon}
                    <Link to={items.routeLink}>
                      <p>{items.pageName}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to={""}
              className="flex my-3 mx-5 min-w-24 gap-2 cursor-pointer justify-center items-center border-2 p-2 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white transition-color duration-150 ease-out"
            >
              <LuShoppingCart className="w-6 h-full" />
              <p className="text-xl font-oxygen font-normal">Cart</p>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between mx-3 min-w-fit px-2">
            <Button
              content="Log In"
              className={
                "bg-orange-500 hover:bg-orange-700 transition-colors ease-in duration-100 text-white font-oxygen font-medium"
              }
              onClick={() => {}}
            />
            <Button
              content="Sign Up"
              className={"bg-orange-500 hover:bg-orange-700 transition-colors ease-in duration-100 text-white font-oxygen font-medium"}
              onClick={() => {}}
            />
            <Link className="flex justify-between my-auto items-center gap-1 transition-all duration-150 font-oxygen hover:border-b-2 " to={''}><BsShopWindow/> Become a seller?</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
