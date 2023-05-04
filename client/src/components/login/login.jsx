import React, { useState } from "react";
import "./login.scss";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-page">
      {/* image section */}
      <div className="image-section">
        <img src="https://ajirakhabar.com/wp-content/uploads/2018/03/tribal-products.jpg" alt="Login page" />
      </div>

      {/* sign-up and login form section */}
      <div className="form-section">
        <h1>Sign up or Log in</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button type="submit">Sign up or Log in</button>
        </form>
        <br></br>
        {/* Google sign-in button */}
        <div className="google-btn">
          
          <div className="google-icon-wrapper">
          <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <button>
          <p className="btn-text">
          Sign in with Google
            </p>
        </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
