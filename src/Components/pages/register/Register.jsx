import "./register.css";

export default function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Add New Registration</span>
      <form action="" className="RegisterForm">
        <label htmlFor="">User Name</label>
        <input type="text" className="RegisterInput" placeholder="Enter UserName..."/>
        <label htmlFor="">Email</label>
        <input type="email" className="RegisterInput" placeholder="Enter Your Email ID..."/>
        <label htmlFor="">Password</label>
        <input type="password" className="RegisterInput" placeholder="Enter Your Password..."/>
        <button className="RegisterButton">Register</button>
      </form>
        <button className="LoginButton">Login</button>
    </div>
  )
}
