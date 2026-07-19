import { useState } from "react";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Content from "../component/Content";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";
import Sidebar from "../component/SIdebar";
import "../styles/home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
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
