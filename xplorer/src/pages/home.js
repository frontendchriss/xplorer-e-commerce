import React from "react";
import Intro from "./landingpage/intro";
import Intro2 from "./landingpage/intro2";
import Categories from "./landingpage/categories";
import Topbrands from "./landingpage/topbrands";
import Bestselling from "./landingpage/bestselling";
import Faq from "./landingpage/faq";
import Topnav from "./landingpage/topnav";
import Footer from "./landingpage/footer";

function Home() {
  return (
    <>
      <Topnav />
      <Intro />
      <Intro2 />
      <Categories />
      <Topbrands />
      <Bestselling />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
