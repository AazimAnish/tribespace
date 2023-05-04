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
        <img src="/path/to/image" alt="Login page" />
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

        {/* Google sign-in button */}
        <button>
          <img src="/path/to/google-icon" alt="Google logo" />
          Sign up or Log in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
