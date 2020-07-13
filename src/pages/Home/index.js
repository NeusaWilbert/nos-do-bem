import React from "react";

import Gallery from "../../components/Gallery";
import Menu from "../../components/Menu";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home__top">
        <h1 style={{ paddingLeft: "20px" }}>Home</h1>
        <Menu />
      </div>
      <Gallery />
    </>
  );
};
export default Home;
