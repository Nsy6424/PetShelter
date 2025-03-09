import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Information from "./components/Information";
import Carousel from "./components/Carousel";
import Product from "./components/Product";
import Pet from "./components/Pet";
import News from "./components/News";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Taitro from "./components/Taitro";
import Menu from "./components/Menu";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <Homepage />
      <Information />
      <Carousel />
      <Product />
      <Pet></Pet>
      <News />
      <Banner></Banner>
      <Taitro></Taitro>
      <Footer />
    </div>
  );
}
