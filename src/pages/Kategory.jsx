import "../styles/kategory.css";
import "../styles/heroSection.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import VideoCard from "../data/VideoCard";
import Filter from "../component/Filter";

function Kategory() {
  return (
    <>
      <Header />
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
