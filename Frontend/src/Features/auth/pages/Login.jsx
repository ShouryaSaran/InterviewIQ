import React, { useState } from 'react'
import "./auth.login.scss"
import { useNavigate , Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';


function Login() {

  const {loading,handleLogin} = useAuth();
  const navigate = useNavigate();

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin({email,password})
    navigate('/')
  }

  if(loading){
    return (<main><h1>Loading.......</h1></main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor="enail">Email</label>
            <input onChange = {(e) => {setemail(e.target.value)}} className='email-input' type="text" id='email' name='email' placeholder='Enter email address' />
          </div>
          <div className='input-group'>
            <label className='password-label' htmlFor="password">Password</label>
            <input onChange={(e) => {setPassword(e.target.value)}} className='password-input' type="password" id='password' name='password' placeholder='Enter a strong password'/>
          </div>
          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an account?<Link to={"/register"}>Sign Up</Link></p>
      </div>
    </main>
  )
}

export default Login
