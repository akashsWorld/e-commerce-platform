import React from "react";
import Categories from "../components/Categories";
import ItemsSection from "../components/ItemsSection";

const Home = () => {
  return (
    <section >
      <Categories />
      <ItemsSection heading="" itemsList={[]}/>
    </section>
  );
};

export default Home;

export const loader=async()=>{
    return null;
}
