import React from "react";
import "../../styles/Auth/register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);

  const hideToggle = () => {
    setHide((prev) => !prev);
  };
  return (
    <div className="register">
      <div className="register_card">
        <div className="register_head">
          <h1>Pendaftaran Akun</h1>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <div className="register_form">
          <label htmlFor="">Nama Lengkap</label>
          <input type="text" required />
        </div>
        <div className="register_form">
          <label htmlFor="">E-mail</label>
          <input type="text" required />
        </div>
        <div className="register_form">
          <label htmlFor="">Jenis Kelamin</label>
          <select name="gender" id="gender">
            <option value="male">Pria</option>
            <option value="female">wanita</option>
            <option value="other">lainnya</option>
            <option value="bijiSatu">biji satu</option>
          </select>
        </div>
        <div className="register_form">
          <label htmlFor="">Nomor telepon</label>
          <div id="tel">
            <select name="number" id="number">
              <option value="indonesia">Indonesia 🇮🇩</option>
              <option value="USA">USA 🇺🇸</option>
            </select>
            <input type="tel" required />
          </div>
        </div>
        <div className="register_form">
          <label htmlFor="">Kata-sandi</label>
          <input type={hide ? "password" : "text"} required />
          <span onClick={hideToggle}>
            <ion-icon name="eye-off-outline"></ion-icon>
          </span>
        </div>
        <div className="register_form">
          <label htmlFor="">konfirmasi kata sandi</label>
          <input type={hide ? "password" : "text"} required />
          <span onClick={hideToggle}>
            <ion-icon name="eye-off-outline"></ion-icon>
          </span>
        </div>
        <a href="">Lupa password?</a>
        <div className="register_action">
          <button className="login_masuk_btn">Daftar</button>
          <button
            onClick={() => {
              navigate("/auth?mode=login");
            }}
            className="login_daftar_btn"
          >
            Masuk
          </button>
          <p>atau</p>
          <div className="google">
            <span className="register_google_icon">
              <ion-icon name="logo-google"></ion-icon>
            </span>
            <button className="register_google_btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
