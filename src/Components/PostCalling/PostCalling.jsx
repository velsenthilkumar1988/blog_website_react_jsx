import "./postcalling.css";
import imagePostCalling from "../../Components/images/header_img.jpg";
export default function PostCalling() {
  return (
    <div className='postCalling'>
        <img src={imagePostCalling} alt="" className="postCallingImg" />
        <div className="postCallingInfo">
            <div className="postCallingCast">
                <span className="postCast">Music</span>
                <span className="postCast">Life Cycle</span>
            </div>
            <span className="postTitle">React applications</span>
            <hr />
            <span className="postData">1 hour ago</span>
        </div>
        <p className="postCallingDesc">React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing</p>
    </div>
  )
}
