import React from "react";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <section >
      <Categories />
    </section>
  );
};

export default Home;

export const loader=async()=>{
    return null;
}
