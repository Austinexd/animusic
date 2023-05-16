import "./Signup.css";
import { useState } from "react";

function Login() {
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    if (user) {
      user = user.slice(0, user.length - 1);
      user = JSON.parse(user);

      setUserDetails(user);
    }
  };

  const phrase = "hello world";
  return (
    <form className="login-form" name="form" onSubmit={handleLogin}>
      <div className="formContainer">
        <span className="logInLogo">ANI Music</span>
      </div>
      <div className="formContent">
        <div className="login-formheader">Log-in</div>
        <input
          id="full"
          name="full"
          className="login-forminput"
          type="email"
          placeholder="Email"
          required
        />
        <div id="errFull" style={{ display: "none", color: "red" }}>
          Minimum 15 characters Email
        </div>
        <input
          id="address"
          name="address"
          className="login-forminput"
          type="password"
          placeholder="Password"
          required
        />
        <div id="errAddress" style={{ display: "none", color: "red" }}>
          Minimum 15 characters password
        </div>
        <button type="reset" className="login-formbutton">
          Reset
        </button>
        <button type="submit" className="login-formbutton">
          Login
        </button>
        <p className="text-center mb-0">
          By clicking on the button above, you agree to our
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
}

export default Login;
