import "../styles/sidebar.css";
import { useNavigate } from "react-router-dom";
function Sidebar({isOpen}) {
  const navigate = useNavigate();
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <a className="sidebar_beranda" href="/">
        Beranda
      </a>
      <hr className="sidebar_divider" />
      <a className="sidebar_kategory" href="/kategory">
        kategory
      </a>
      <hr className="sidebar_divider" />
      <button onClick={() => {navigate("/auth?mode=login")}} id="sidebarLogin">Login</button>
      <button onClick={() => {navigate("/auth?mode=register")}} id="sidebarRegister">Register</button>
    </div>
  );
}

export default Sidebar;
