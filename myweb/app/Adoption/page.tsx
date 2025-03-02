import React from "react";
import Navbar from "../components/Navbar";
import Adopt from "./component/Adopt";
import PAdopt from "./component/PAdopt";
import Pet from "../components/Pet";
import TimPet from "./component/TimPet";
import Bannerr from "./component/Bannerr";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Adopt></Adopt>
      <PAdopt></PAdopt>
      <TimPet></TimPet>
      <Pet></Pet>
      <Bannerr></Bannerr>
      <Footer></Footer>
    </div>
  );
};

export default page;
