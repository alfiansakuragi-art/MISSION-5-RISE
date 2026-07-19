import "../../styles/baseComponent/header.css"
import logo from "../../asset/logo.png"
import { useNavigate } from 'react-router-dom';
function Header({setIsOpen}) {
  const navigate = useNavigate();
    const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header>
        <img src={logo} alt="" />
        <nav>
            <a onClick={() => {navigate("/")}} href="">Home</a>
            <a onClick={() => {navigate("/kategory")}} href="">Kategory</a>
            <button onClick={() => {navigate("/auth?mode=login")}} id="login"><a>Login</a></button>
            <button onClick={() => {navigate("/auth?mode=register")}} id="register"><a href="#">Register</a></button>
        </nav>
        <span id='sidebar' onClick={toggleSidebar}><ion-icon name="menu-outline"></ion-icon></span>
    </header>
  )
}

export default Header
