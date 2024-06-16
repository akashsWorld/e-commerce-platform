import React from "react";
import Categories from "../components/Categories";
import ItemsSection from "../components/ItemsSection";

const Home = () => {
  return (
    <div>
      <Categories />
      <ItemsSection heading="Top mobiles" itemsList={[]}/>

    </div>
  );
};

export default Home;

export const loader=async()=>{
    return null;
}

