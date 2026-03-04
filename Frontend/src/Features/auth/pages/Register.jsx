import React from "react";
import {useNavigate,Link} from 'react-router'


function Register() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="form-container">
        <h1>Welcome To AIcelt</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="enail">Username</label>
            <input
              className="Username-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter name of the user"
            />
          </div>
          <div className="input-group">
            <label htmlFor="enail">Email</label>
            <input
              className="email-input"
              type="text"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label className="password-label" htmlFor="password">
              Password
            </label>
            <input
              className="password-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter a strong password"
            />
          </div>
          <button className="button primary-button">Create Account</button>
        </form>
        <p>Already have an account? <Link to={"/login"}>LogIn</Link></p>
      </div>
    </main>
  );
}

export default Register;
