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
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Homepage />
      <Information />
      <Carousel />
      <Product />
      <Pet></Pet>
      <News />
      <Banner></Banner>
      <Footer />
      {/* <div className="text-center mt-4">
            <div className="w-full text-sm">
              <a href="/register" className="text-blue-600 hover:underline">
                Need an account? Sign Up
              </a>
            </div>
          </div> */}
    </div>
  );
}
