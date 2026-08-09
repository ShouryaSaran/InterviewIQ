import { Link } from 'react-router'
import { ArrowRight, Play, Sparkles, Bot, MessageSquareText, BookOpen, TrendingUp, ChevronDown, CreditCard, UserCheck, Users } from 'lucide-react'
import './landing.scss'

function LandingPage() {
  return (
    <div className="Landing-Page">
      {/* ── Navigation ── */}
      <header className="nav">
        <div className="nav__inner">
          <Link to="/" className="nav__brand">
            <div className="nav__logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12C8 9.79 9.79 8 12 8s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="nav__brand-name">INTERPREP</span>
          </Link>

          <nav className="nav__links">
            <a href="#features" className="nav__link">Features</a>
            <a href="#how-it-works" className="nav__link">How It Works</a>
            <a href="#" className="nav__link">Success Stories</a>
            <a href="#" className="nav__link">Pricing</a>
            <a href="#" className="nav__link nav__link--dropdown">
              Resources <ChevronDown size={14} />
            </a>
          </nav>

          <div className="nav__actions">
            <Link to="/login" className="nav__login">Log in</Link>
            <Link to="/register" className="nav__cta">
              Get Started Free <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              <Sparkles size={14} />
              <span>AI-POWERED INTERVIEW PREPARATION</span>
            </div>

            <h1 className="hero__title">
              <span>PREPARE.</span>
              <span>PRACTICE.</span>
              <span className="hero__title--accent">GET HIRED.</span>
            </h1>

            <p className="hero__subtitle">
              AI-driven mock interviews, personalized feedback, and curated resources to help you land your dream job.
            </p>

            <div className="hero__buttons">
              <Link to="/register" className="hero__btn hero__btn--primary">
                Start Preparing Now <ArrowRight size={18} />
              </Link>
              <a href="#how-it-works" className="hero__btn hero__btn--ghost">
                <Play size={16} /> See How It Works
              </a>
            </div>

            <div className="hero__trust-items">
              <div className="trust-item">
                <CreditCard size={16} />
                <span>No Credit Card Required</span>
              </div>
              <div className="trust-item">
                <UserCheck size={16} />
                <span>Personalized for Your Role</span>
              </div>
              <div className="trust-item">
                <Users size={16} />
                <span>15,000+ Job Seekers Trust Us</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="hero__illustration">
            <div className="hero-desk">
              {/* Laptop */}
              <div className="hero-laptop">
                <div className="hero-laptop__header">
                  <span className="hero-dot"></span>
                  <span className="hero-dot"></span>
                  <span className="hero-dot"></span>
                </div>
                <div className="hero-laptop__code">
                  <div className="code-line"><span className="c-keyword">def</span> <span className="c-func">two_sum</span>(nums, target):</div>
                  <div className="code-line">    seen = {'{}'}</div>
                  <div className="code-line">    <span className="c-keyword">for</span> i, num <span className="c-keyword">in</span> enumerate(nums):</div>
                  <div className="code-line">        diff = target - num</div>
                  <div className="code-line">        <span className="c-keyword">if</span> diff <span className="c-keyword">in</span> seen:</div>
                  <div className="code-line">            <span className="c-keyword">return</span> [seen[diff], i]</div>
                  <div className="code-line">        seen[num] = i</div>
                </div>
              </div>

              {/* Notebook */}
              <div className="hero-notebook">
                <div className="hero-notebook__title">PLAN</div>
                <div className="hero-notebook__item">☑ DSA Practice</div>
                <div className="hero-notebook__item">☑ System Design</div>
                <div className="hero-notebook__item">☐ Mock Interview</div>
                <div className="hero-notebook__item">☐ Behavioral Prep</div>
              </div>

              {/* Floating cards */}
              <div className="hero-float hero-float--mock">
                <div className="hero-float__header">Mock Interview</div>
                <div className="hero-float__score">
                  <svg viewBox="0 0 40 40" width="40" height="40">
                    <circle cx="20" cy="20" r="17" fill="none" stroke="#E8E6DD" strokeWidth="3" />
                    <circle cx="20" cy="20" r="17" fill="none" stroke="#5B6751" strokeWidth="3"
                      strokeDasharray="106.81" strokeDashoffset="10.68" strokeLinecap="round"
                      transform="rotate(-90 20 20)" />
                  </svg>
                  <span>90%</span>
                </div>
              </div>

              <div className="hero-float hero-float--book1">System Design</div>
              <div className="hero-float hero-float--book2">Cracking the Coding Interview</div>
              <div className="hero-float hero-float--book3">Behavioral Interview</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Trust Bar ── */}
      <section className="trust-bar">
        <p className="trust-bar__label">TRUSTED BY JOB SEEKERS FROM TOP COMPANIES</p>
        <div className="trust-bar__logos">
          <span className="company-logo">Google</span>
          <span className="company-logo">Microsoft</span>
          <span className="company-logo company-logo--bold">amazon</span>
          <span className="company-logo">Meta</span>
          <span className="company-logo"> Apple</span>
          <span className="company-logo company-logo--bold">NETFLIX</span>
          <span className="company-logo">Adobe</span>
          <span className="company-logo">JPMorganChase</span>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="features" id="features">
        <p className="features__label">EVERYTHING YOU NEED TO SUCCEED</p>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">
              <Bot size={24} />
            </div>
            <h3 className="feature-card__title">AI Mock Interviews</h3>
            <p className="feature-card__text">
              Realistic mock interviews tailored to your role and experience.
            </p>
            <a href="#" className="feature-card__arrow"><ArrowRight size={18} /></a>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <MessageSquareText size={24} />
            </div>
            <h3 className="feature-card__title">Personalized Feedback</h3>
            <p className="feature-card__text">
              Get detailed AI feedback on your answers, clarity, and communication.
            </p>
            <a href="#" className="feature-card__arrow"><ArrowRight size={18} /></a>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <BookOpen size={24} />
            </div>
            <h3 className="feature-card__title">Curated Question Bank</h3>
            <p className="feature-card__text">
              Access role-specific questions curated from top companies.
            </p>
            <a href="#" className="feature-card__arrow"><ArrowRight size={18} /></a>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <TrendingUp size={24} />
            </div>
            <h3 className="feature-card__title">Track & Improve</h3>
            <p className="feature-card__text">
              Track your progress, identify weak areas, and improve faster.
            </p>
            <a href="#" className="feature-card__arrow"><ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <div className="landing-footer__inner">
          <p>&copy; 2026 InterPrep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
