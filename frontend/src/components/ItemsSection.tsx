import React from "react";
import { items } from "../constants";
import { Link } from "react-router-dom";

const ItemsSection = ({
  itemsList,
  heading,
}: {
  itemsList: { itemName: string; itemsImage: string; itemsPrice: number }[];
  heading: string;
}) => {
  return (
    <section className="inline-block w-full p-8 bg-gradient-blue mt-12">
      {items.map((item, index) => (
        <div key={index} className="mb-7">
          <h2 className="text-2xl font-oxygen font-bold bg-transparent text-white">
            {item.heading}
          </h2>
          <div className="flex justify-evenly items-center mt-5 border p-8 rounded-lg bg-white h-full">
            {item.itemsList.map((eachItem,index)=>(<Link to={eachItem.routeLink} key={index} className="item after:item-after hover:item-after__hover h-72">
              <img
                className="min-w-36 max-h-56 bg-transparent z-10"
                src={eachItem.itemsImage}
                alt="catalogue"
              />
              <p className="font-oxygen text-inherit z-10 font-medium">
                {eachItem.itemName}
              </p>
              <p className="font-bold font font-oxygen text-inherit z-10">
                {eachItem.priceDetail} &#x20b9; {eachItem.itemsPrice}
              </p>
            </Link>))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemsSection;
