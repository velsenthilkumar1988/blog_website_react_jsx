import "./Header.css";
//import ImageFile from './images/headerImg.jpg';
import headerImg from "../../Components/images/carouselPage.jpg";
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src={headerImg} alt="" />
    </div>
  )
}
