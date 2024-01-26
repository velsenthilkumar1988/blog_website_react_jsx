import "./Topbar.css";
import blogPageImage from "../../Components/images/carouselPage.jpg";
import { Link } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
export default function Topbar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i class="topIcon fa-brands fa-square-facebook"></i>
            <i class="topIcon fa-brands fa-square-twitter"></i>
            <i class="topIcon fa-brands fa-square-whatsapp"></i>
            <i class="topIcon fa-brands fa-telegram"></i>
            <i class="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to="/" style={{textDecoration: "none"}}>Home</Link>
                </li>
                <li className='topListItem'>
                <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
                </li>
                <li className='topListItem'>
                    <Link to="/register" style={{textDecoration: "none"}}>Register</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/write' style={{textDecoration: "none"}}>Write Your Blog</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/settings' style={{textDecoration: "none"}}>Settings</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/single' style={{textDecoration: "none"}}>Blog Pages</Link>
                </li>
                <li className='topListItem'>Logout?</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className='topImg' src={blogPageImage} alt="" />
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
