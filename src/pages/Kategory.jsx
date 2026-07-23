import "../styles/kategory/kategory.css";
import "../styles/home/heroSection.css";
import Header from "../component/BaseComponent/Header";
import Footer from "../component/BaseComponent/Footer";
import Sidebar from "../component/BaseComponent/Sidebar";
import VideoCard from "../component/Course/VideoCard";
import Filter from "../component/Kategory/Filter";
import { useState } from "react";

function Kategory() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <div className="kategory_wrapper">
        <Filter />
        <div className="video">
          <VideoCard />
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Kategory;
