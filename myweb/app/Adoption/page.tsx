import React from "react";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Timpet from "./component/Timpet";
import PetNgoan from "./component/PetNgoan";
import PAdopt from "./component/PAdopt";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <PAdopt></PAdopt>
      <Timpet></Timpet>
      <PetNgoan></PetNgoan>
    </div>
  );
};

export default page;
