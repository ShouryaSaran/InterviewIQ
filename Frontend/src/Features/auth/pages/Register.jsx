import { useState } from "react";
import {useNavigate,Link} from 'react-router'
import { useAuth } from "../hooks/useAuth";


function Register() {

  const navigate = useNavigate();
  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const {loading , handleRegister} = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({username,email,password})
    navigate("/")
  };
  return (
    <main>
      <div className="form-container">
        <h1>Welcome To AIcelt</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="enail">Username</label>
            <input
            onChange={(e) => setUser(e.target.value)}
              className="Username-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter name of the user"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e)=> setPassword(e.target.value)}
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
