import React from 'react'
import "./auth.login.scss"
import { useNavigate , Link } from 'react-router';
function Login() {


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <main>
      <div className="form-container">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor="enail">Email</label>
            <input className='email-input' type="text" id='email' name='email' placeholder='Enter email address' />
          </div>
          <div className='input-group'>
            <label className='password-label' htmlFor="password">Password</label>
            <input className='password-input' type="password" id='password' name='password' placeholder='Enter a strong password'/>
          </div>
          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an account?<Link to={"/register"}>Sign Up</Link></p>
      </div>
    </main>
  )
}

export default Login
