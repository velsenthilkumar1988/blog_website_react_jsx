import "./singlepost.css";
import singlePostImgValue from '../images/header_img.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={singlePostImgValue} alt="" />
        <h1 className="singlePostTitle">
          This form has the default HTML form
            <div className="singlePostEdit">
                <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
            </div> 
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author : <b>Senthilkumar MCA</b></span>
          <span className="singlePostData">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Font Awesome is a popular icon set and toolkit for web design. It offers thousands of icons in 9 styles and 68 categories, with a simple syntax to use them on your website or app 1. You can also create your own icons, customize them, and access them with a CDN, a p
        </p>
      </div>
    </div>
  );
}
