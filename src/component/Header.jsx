import '../styles/header.css'
import logo from '../asset/logo.png'
import { useNavigate } from 'react-router-dom';
function Header({toggleSidebar}) {
  const navigate = useNavigate();
  return (
    <header>
        <img src={logo} alt="" />
        <nav>
            <a onClick={() => {navigate("")}} href="/">Home</a>
            <a onClick={() => {navigate("")}} href="/kategory">Kategory</a>
            <button onClick={() => {navigate("/auth?mode=login")}} id="login"><a href="#">Login</a></button>
            <button onClick={() => {navigate("/auth?mode=register")}} id="register"><a href="#">Register</a></button>
        </nav>
        <span id='sidebar' onClick={toggleSidebar}><ion-icon name="menu-outline"></ion-icon></span>
    </header>
  )
}

export default Header
