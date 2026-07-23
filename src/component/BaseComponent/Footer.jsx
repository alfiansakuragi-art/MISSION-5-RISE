import "../../styles/baseComponent/footer.css";
import logo from "../../asset/logo.png";
import { useState } from "react";
function Footer() {
  const [openFilter, setOpenFilter] = useState({
    isKategory: true,
    isCompany: true,
    isComunity: true,
  });

  const filterToggle = (key) => {
    setOpenFilter((prev) => ({
      ...openFilter,
      [key]: !prev[key],
    }));
  };

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
            <h3>
              Kategori
              <span onClick={() => {filterToggle("isKategory")}} className="footerArrow">
                <ion-icon name="chevron-up-outline"></ion-icon>
              </span>
            </h3>
            <ul className={openFilter.isKategory ? "" : "footer_hide"}>
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
            <h3>
              Perusahaan
              <span onClick={() => {filterToggle("isCompany")}} className="footerArrow">
                <ion-icon name="chevron-up-outline"></ion-icon>
              </span>
            </h3>
            <ul className={openFilter.isCompany ? "" : "footer_hide"}>
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
            <h3>
              Komunitas{" "}
              <span onClick={() => {filterToggle("isComunity")}} className="footerArrow">
                <ion-icon name="chevron-up-outline"></ion-icon>
              </span>
            </h3>
            <ul className={openFilter.isComunity ? "" : "footer_hide"}>
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
