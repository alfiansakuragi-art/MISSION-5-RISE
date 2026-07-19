import { useState } from "react";
import Header from "../component/BaseComponent/Header";
import HeroSection from "../component/Home/HeroSection";
import Content from "../component/home/Content";
import NewsLetter from "../component/Home/NewsLetter";
import Footer from "../component/BaseComponent/Footer";
import Sidebar from "../component/BaseComponent/Sidebar";
import "../styles/home/home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <div className="wrapper">
        <HeroSection />
        <Content />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
}

export default Home;
