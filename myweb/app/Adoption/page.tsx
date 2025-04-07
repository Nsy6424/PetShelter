import React from "react";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Timpet from "./component/Timpet";
import PetNgoan from "./component/PetNgoan";
import PAdopt from "./component/PAdopt";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <Homepage></Homepage>
      <PAdopt></PAdopt>
      <Timpet></Timpet>
      {/* <PetNgoan></PetNgoan> */}
    </div>
  );
};

export default page;
