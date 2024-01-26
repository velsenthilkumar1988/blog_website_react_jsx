import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";
import settingImg from "../../images/header_img.jpg"
export default function Settings() {
  return (
    <div className="settingsContainer">
        <div className="settingContainerWrapper">
            <div className="settingsTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form action="" className="settingForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img className="settingPPImg" src={settingImg} alt="" />
                    <label htmlFor="fileInput">
                        <i class="settingPPImgIcon fa-solid fa-user-plus"></i>
                    </label>
                    <input type="file" className="settingPPFileInput" id="fileInput" style={{display: "none"}} />
                </div>
                <label htmlFor="">User Name</label>
                <input type="text" placeholder="senthilkumar"/>
                <label htmlFor="">Email ID</label>
                <input type="email" placeholder="senthilkumar@gmail.com" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
