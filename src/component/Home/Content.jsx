import "../../styles/home/content.css";
import "../../styles/courses/videoCourse.css";
import VideoCard from "../../data/VideoCard";
function Content() {
  return (
    <div className="content">
      <div className="content-header">
        <h1>Koleksi Video Pembelajaran Unggulan</h1>
        <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </div>
      <nav>
        <a href="#" className="nav_active">
          Semua Kelas
        </a>
        <a href="#">Pemasaran</a>
        <a href="#">Desain</a>
        <a href="#">Pengembangan Diri</a>
        <a href="#">Bisnis</a>
      </nav>
      <div className="video">
        <VideoCard />
      </div>
    </div>
  );
}

export default Content;
