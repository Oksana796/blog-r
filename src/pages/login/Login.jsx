import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Email" className="loginInput" />
        <label>Password</label>
        <input type="password" placeholder="Password" className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default Login;
