import './sidebar.css';
import sliderImage from "../../Components/images/topicon.jpeg";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg' src={sliderImage} alt="" />
            <p className='sidebarPara'>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.</p>
        </div>
        <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Sports</li>
                    <li className='sidebarListItem'>Technology</li>
                    <li className='sidebarListItem'>Cinema</li>
                </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocialMedia">
                <i class="sidebarSocialIcon fa-brands fa-square-facebook"></i>
                <i class="sidebarSocialIcon fa-brands fa-square-twitter"></i>
                <i class="sidebarSocialIcon fa-brands fa-square-whatsapp"></i>
                <i class="sidebarSocialIcon fa-brands fa-telegram"></i>
                <i class="sidebarSocialIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
