import React from "react";
import Categories from "../components/Categories";
import ItemsSection from "../components/ItemsSection";

const Home = () => {
  return (
    <div>
      <Categories />
      <section className="bg-gradient-blue mt-10">
      <ItemsSection heading="Top mobiles" itemsList={[]}/>
      </section>
    </div>
  );
};

export default Home;

export const loader=async()=>{
    return null;
}
