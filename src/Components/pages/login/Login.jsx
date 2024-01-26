import "./login.css";

export default function Login() {
  return (
    <div className="Login">
      <span className="LoginTitle">Login Panel</span>
      <form action="" className="LoginForm">
        <label htmlFor="">Email</label>
        <input type="email" className="LoginInput" placeholder="Enter Your Email ID..."/>
        <label htmlFor="">Password</label>
        <input type="password" className="LoginInput" placeholder="Enter Your Password..."/>
        <button className="LoginButton">Login</button>
      </form>
        <button className="LoginRegisterButton">New Register ?</button>
    </div>
  )
}
