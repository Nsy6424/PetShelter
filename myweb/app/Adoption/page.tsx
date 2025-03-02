import React from "react";
import Navbar from "../components/Navbar";
import Adopt from "./component/Adopt";
import PAdopt from "./component/PAdopt";
import Pet from "../components/Pet";
import TimPet from "./component/TimPet";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Adopt></Adopt>
      <PAdopt></PAdopt>
      <TimPet></TimPet>
      <Pet></Pet>
    </div>
  );
};

export default page;
