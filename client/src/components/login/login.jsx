import React, { useState } from "react";
import "./login.scss";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase with your project's configuration
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogleLogin = () => {
    // Create a new Google provider
    const provider = new firebase.auth.GoogleAuthProvider();

    // Sign in with Google
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in
        console.log("Google sign-in successful:", result);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google sign-in error:", error);
      });
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
        <button onClick={handleGoogleLogin}>
          <img src="/path/to/google-icon" alt="Google logo" />
          Sign up or Log in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
