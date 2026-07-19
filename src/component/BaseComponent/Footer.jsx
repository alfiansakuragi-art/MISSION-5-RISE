import "../../styles/baseComponent/footer.css";
import logo from "../../asset/logo.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <section className="footer_brand">
          <img src={logo} alt="logo" className="footer_logo" />
          <p className="footer_deskription">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <address className="footer_adress">
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </address>
        </section>
        <nav className="footer_menu">
          <div className="footer_column">
            <h3>Kategori</h3>
            <ul>
              <li>
                <a href="">Digital & Teknologi</a>
              </li>
              <li>
                <a href="">Pemasaran</a>
              </li>
              <li>
                <a href="">Manajemen Bisnis</a>
              </li>
              <li>
                <a href="">Pengembangan Diri</a>
              </li>
              <li>
                <a href="">Desain</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Perusahaan</h3>
            <ul>
              <li>
                <a href="">Tentang Kami</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="">Ketentuan Layanan</a>
              </li>
              <li>
                <a href="">Bantuan</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Komunitas</h3>
            <ul>
              <li>
                <a href="">Tips Sukses</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="footer_divider" />
      <div className="footer_bottom">
        <p className="footer_copyright">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
        <div className="footer_social">
          <span>
            <ion-icon name="logo-facebook"></ion-icon>
            <a href=""></a>
          </span>
          <span>
            <ion-icon name="logo-linkedin"></ion-icon>
            <a href=""></a>
          </span>
          <span>
            <ion-icon name="logo-instagram"></ion-icon>
            <a href=""></a>
          </span>
          <span>
            <ion-icon name="logo-twitter"></ion-icon>
            <a href=""></a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
