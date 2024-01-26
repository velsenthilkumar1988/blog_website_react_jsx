import "./write.css";
import WriteImgValue from "../../images/carouselPage.jpg";
export default function Write() {
  return (
    <div className='writeContainer'>
        <img className="writeImg" src={WriteImgValue} alt="" />
        <form action="" className="writeFrom">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeInputIcon fa-solid fa-square-plus"></i>
                </label>
                <input type="file"  id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Enter Title ?" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" placeholder="Tell your Story" cols="30" rows="10"></textarea>
            </div>
            <div className="writeFormGroup">
                <button className="writeSubmit">Publish</button>
            </div>    
        </form>
    </div>
  )
}
