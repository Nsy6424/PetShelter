import React from "react";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Donation from "./component/Donation";
import Taitro from "../components/Taitro";
import Pet from "../components/Pet";
import News from "../components/News";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <Homepage></Homepage>
      <Donation></Donation>
      <Taitro></Taitro>
      <Pet></Pet>
      <News></News>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default page;
