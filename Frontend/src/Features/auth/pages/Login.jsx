import React, { useState } from 'react'
import "../styles/auth.login.scss"
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'

function Login() {
  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleLogin({ email, password })
    navigate('/')
  }

  if (loading) {
    return (
      <main className="loading-state">
        <h1>Loading.......</h1>
      </main>
    )
  }

  return (
    <div className="Login-Page">
      {/* Background decorative elements */}
      <div className="login-bg-decorations">
        <div className="decoration decoration--code">&lt;/&gt;</div>
        <div className="decoration decoration--chat">💬</div>
        <div className="decoration decoration--graph">📊</div>
        <div className="decoration decoration--bracket">{'{}'}</div>
      </div>

      <header className="login-header">
        <Link to="/" className="login-header__brand">
          <div className="login-brand__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12C8 9.79 9.79 8 12 8s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="login-brand__name">INTERPREP</span>
        </Link>
        <div className="login-header__actions">
          <span className="login-header__text">Don&apos;t have an account?</span>
          <Link to="/register" className="login-header__link">Sign up</Link>
        </div>
      </header>

      <main className="login-content">
        <div className="login-form-wrapper">
          <div className="login-title-section">
            <h1 className="login-title">WELCOME BACK</h1>
            <p className="login-subtitle">Log in to continue your interview preparation</p>
          </div>

          <div className="login-form__card">
            <form onSubmit={handleSubmit}>
              <label className="field">
                <span className="field__label">Email Address</span>
                <div className="field__input-wrapper">
                  <input
                    className="field__input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                  <Mail className="field__icon" size={18} />
                </div>
              </label>

              <label className="field">
                <div className="field__label-row">
                  <span className="field__label">Password</span>
                  <Link to="#" className="field__link">
                    Forgot password?
                  </Link>
                </div>
                <div className="field__input-wrapper">
                  <input
                    className="field__input"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="field__toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              <label className="checkbox-field">
                <input
                  className="checkbox-field__input"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember me for 30 days</span>
              </label>

              <button className="primary-button" type="submit">
                <span>Log In</span>
                <ArrowRight size={18} />
              </button>

              <div className="divider" aria-hidden="true">
                <span>or</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="social-button">
                  <svg className="social-button__icon" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
                <button type="button" className="social-button">
                  <svg className="social-button__icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Continue with GitHub</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom illustration area */}
        <div className="login-illustration">
          <div className="illustration-desk">
            <div className="desk-laptop">
              <div className="laptop-screen">
                <div className="laptop-header">
                  <span className="laptop-dot"></span>
                  <span className="laptop-dot"></span>
                  <span className="laptop-dot"></span>
                </div>
                <div className="laptop-content">
                  <div className="code-line"><span className="code-purple">def</span> <span className="code-green">two_sum</span>(nums, target):</div>
                  <div className="code-line">    seen = {'{}'}</div>
                  <div className="code-line">    <span className="code-purple">for</span> i, num <span className="code-purple">in</span> enumerate(nums):</div>
                  <div className="code-line">        diff = target - num</div>
                  <div className="code-line">        <span className="code-purple">if</span> diff <span className="code-purple">in</span> seen:</div>
                  <div className="code-line">            <span className="code-purple">return</span> [seen[diff], i]</div>
                </div>
              </div>
            </div>
            <div className="desk-items">
              <div className="desk-notebook">
                <div className="notebook-title">TODAY'S PLAN</div>
                <div className="notebook-item">✓ Mock Interview</div>
                <div className="notebook-item">✓ DSA Practice</div>
                <div className="notebook-item">□ System Design</div>
                <div className="notebook-item">□ Behavioral Prep</div>
              </div>
              <div className="desk-score">
                <svg viewBox="0 0 60 60" className="score-ring">
                  <circle cx="30" cy="30" r="26" fill="none" stroke="#E8E6DD" strokeWidth="4" />
                  <circle cx="30" cy="30" r="26" fill="none" stroke="#5B6751" strokeWidth="4"
                    strokeDasharray="147.65" strokeDashoffset="14.77" strokeLinecap="round"
                    transform="rotate(-90 30 30)" />
                </svg>
                <span className="score-text">90%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
