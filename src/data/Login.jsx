import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login_card">
        <div className="login_head">
          <h1>Masuk ke Akun</h1>
          <p>Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>
        <div className="login_form">
          <label htmlFor="">E-mail</label>
          <input type="email" required />
        </div>
        <div className="login_form">
          <label htmlFor="">Password</label>
          <input type="password" required />
          <span>
            <ion-icon name="eye-off-outline"></ion-icon>
          </span>
        </div>
        <a href="">Lupa password?</a>
        <div className="login_action">
          <button className="login_masuk_btn">Masuk</button>
          <button onClick={() => {navigate("/auth?mode=register")}} className="login_daftar_btn">Daftar</button>
          <p>atau</p>
          <div className="google">
            <span className="login_google_icon">
              <ion-icon name="logo-google"></ion-icon>
            </span>
            <button className="login_google_btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
