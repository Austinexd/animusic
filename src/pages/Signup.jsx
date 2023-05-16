import "./Signup.css";

function Signup() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {};
    for (const [key, value] of formData) {
      userData[key] = value;
    }
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <form className="login-form" onSubmit={handleSubmitForm}>
      <div className="login-formContainer">
        <span className="login-form__logo">ANI Music</span>
      </div>
      <div className="login-formcontent">
        <div className="login-formheader">Sign-up</div>
        Fullname
        <input
          id="fullName"
          name="fullName"
          className="login-forminput"
          type="text"
          placeholder="Full Name"
          required
        />
        <div id="errFull" style={{ display: "none", color: "red" }}>
          Minimum 15 characters Full name
        </div>
        Email
        <input
          id="email"
          name="email"
          className="login-forminput"
          type="email"
          placeholder="Email"
          required
        />
        <div id="errFull" style={{ display: "none", color: "red" }}>
          Minimum 15 characters Full name
        </div>
        Age
        <input
          id="age"
          name="age"
          className="login-forminput"
          type="number"
          placeholder="Age"
          required
        />
        <div id="errAge" style={{ display: "none", color: "red" }}>
          Minimum 2 characters Age
        </div>
        Sex
        <input
          id="sex"
          name="sex"
          className="login-forminput"
          type="text"
          placeholder="Sex"
          required
        />
        <div id="errSex" style={{ display: "none", color: "red" }}>
          Minimum 1 characters Sex
        </div>
        Address
        <input
          id="address"
          name="address"
          className="login-forminput"
          type="text"
          placeholder="Address"
          required
        />
        <div id="errAddress" style={{ display: "none", color: "red" }}>
          Minimum 15 characters Address
        </div>
        Password
        <input
          id="password"
          name="password"
          className="login-forminput"
          type="password"
          placeholder="Create password"
          required
        />
        Confirm Password
        <div id="errAddress" style={{ display: "none", color: "red" }}>
          Minimum 15 characters Create password
        </div>
        <input
          id="confirmpass"
          name="confirmpass"
          className="login-forminput"
          type="password"
          placeholder="Confirm password"
          required
        />
        <div id="errAddress" style={{ display: "none", color: "red" }}>
          Minimum 15 characters Confirm password
        </div>
        <button type="reset" className="login-formbutton">
          Reset
        </button>
        <button type="submit" className="login-formbutton">
          Create
        </button>
        <p className="text-center mb-0">
          By clicking on the button above, you agree to our
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
}

export default Signup;
