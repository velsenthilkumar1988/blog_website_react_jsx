import "./Topbar.css";
import blogPageImage from "../../Components/images/carouselPage.jpg";
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
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About Us</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write Your Blog</li>
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
