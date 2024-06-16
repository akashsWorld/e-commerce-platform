import React from "react";

const ItemsSection = ({
  itemsList,
  heading,
}: {
  itemsList: { itemName: string; itemsImage: string; itemsPrice: number }[];
  heading: string;
}) => {
  return (
    <section className="inline-block mt-2 w-full p-8">
      <h2 className="text-2xl font-oxygen font-bold bg-transparent text-white">{heading}</h2>
      <div className="flex justify-evenly items-center mt-5 border p-8 rounded-lg bg-white h-full">
        <div className="item after:item-after hover:item-after__hover">
          <img
          className="w-36 bg-transparent z-10"
            src="https://cellularpoint.ca/wp-content/uploads/2023/10/apple-15-Pro-black.png"
            alt="catalogue"
          />
          <p className="font-oxygen text-inherit z-10 font-medium">I phone 15</p>
          <p className="font-bold font font-oxygen text-inherit z-10">Just &#x20b9; 12,999</p>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
