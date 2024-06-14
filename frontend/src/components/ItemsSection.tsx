import React from "react";

const ItemsSection = ({
  itemsList,
  heading,
}: {
  itemsList: { itemName: string; itemsImage: string; itemsPrice: number }[];
  heading: string;
}) => {
  return <section className="flex justify-evenly items-center">
    Items
  </section>
};

export default ItemsSection;
