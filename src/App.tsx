import { useState } from 'react';
import './index.css';

// Import images
import profileImg from './assets/profile.png';
import projectFinanceImg from './assets/project_finance.png';
import projectSaasImg from './assets/project_saas.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Background Glow Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navigation Header */}
      <header className="container navbar-wrapper">
        <nav className="navbar">
          <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            John Smith
          </a>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              >
                Skills
              </a>
            </li>
          </ul>

          <a 
            href="#contact" 
            className="nav-contact-btn"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>

          <button 
            className="mobile-nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container hero">
        <div className="hero-tags">
          <span className="hero-tag">COLLABORATIVE</span>
          <span className="hero-tag-dot"></span>
          <span className="hero-tag">EMPATHETIC</span>
          <span className="hero-tag-dot"></span>
          <span className="hero-tag">INNOVATIVE</span>
        </div>
        <h1>Beyond The Interface</h1>
        <p className="hero-subtitle">
          Crafting Unforgettable Online Experiences as a UI/UX Designer And Developer
        </p>
        <div className="hero-ctas">
          <button onClick={() => scrollToSection('projects')} className="neo-btn neo-btn-primary">
            My Work
          </button>
          <button onClick={() => scrollToSection('about')} className="neo-btn neo-btn-secondary">
            About Me
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi There! I'm John Smith, a passionate UI/UX designer and developer dedicated to creating captivating digital experiences. With a keen eye for aesthetics and a deep understanding of user-centered design principles, I strive to craft interfaces that not only look great but also feel seamless to navigate.
            </p>
            <p>
              By bridging the gap between design and front-end engineering, I build robust, accessible, and delightful digital products. I believe that good design is simple, intuitive, and solves real-world problems.
            </p>
            <div className="about-details">
              <div className="about-detail-item">
                <h4>Role</h4>
                <p>UI/UX Designer & Dev</p>
              </div>
              <div className="about-detail-item">
                <h4>Experience</h4>
                <p>4+ Years Professional</p>
              </div>
              <div className="about-detail-item">
                <h4>Education</h4>
                <p>B.Sc. Digital Design</p>
              </div>
              <div className="about-detail-item">
                <h4>Location</h4>
                <p>Toronto, ON (Remote)</p>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <div className="about-image-shadow-black"></div>
              <div className="about-image-shadow-blue"></div>
              <img 
                src={profileImg} 
                alt="John Smith Profile" 
                className="about-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A curated selection of digital products that combine form, function, and style.</p>
          </div>

          <div className="bento-grid">
            {/* Project 1 - Apex Finance */}
            <div className="neo-card bento-card bento-card-large">
              <img src={projectFinanceImg} alt="Apex Finance App Mockup" className="project-card-image" />
              <div className="project-card-content">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">UI/UX Design</span>
                    <span className="project-tag">React Native</span>
                    <span className="project-tag">Fintech</span>
                  </div>
                  <h3>Apex Finance Dashboard</h3>
                  <p>A sleek dark-mode mobile banking and investment dashboard designed to simplify asset tracking and daily trading.</p>
                </div>
                <a href="#projects" className="project-link" onClick={(e) => e.preventDefault()}>
                  View Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Stats Bento Card */}
            <div className="neo-card bento-card bento-card-medium stats-card">
              <div>
                <span className="stats-label">Projects</span>
                <div className="stats-number">20+</div>
              </div>
              <div>
                <span className="stats-label">Happy Clients</span>
                <div className="stats-number">99%</div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="neo-card bento-card bento-card-small social-card">
              <span className="stats-label" style={{ fontSize: '14px' }}>Let's Connect</span>
              <div className="social-icons-grid">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Dribbble">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quote Card */}
            <div className="neo-card bento-card bento-card-small quote-card">
              <p className="quote-text">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <span className="quote-author">— Steve Jobs</span>
            </div>

            {/* Project 2 - Horizon SaaS */}
            <div className="neo-card bento-card bento-card-large" style={{ gridColumn: 'span 4' }}>
              <img src={projectSaasImg} alt="SaaS Web Mockup" className="project-card-image" />
              <div className="project-card-content">
                <div>
                  <div className="project-tags">
                    <span className="project-tag">Web Design</span>
                    <span className="project-tag">SaaS</span>
                    <span className="project-tag">Framer</span>
                  </div>
                  <h3>Horizon Business Analytics</h3>
                  <p>A minimalist light-mode dashboard and landing page for an AI-powered SaaS startup tracking real-time user metrics.</p>
                </div>
                <a href="#projects" className="project-link" onClick={(e) => e.preventDefault()}>
                  View Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>Core Stack</h2>
            <p>The tools and technologies I use to turn designs into living, breathing web products.</p>
          </div>

          <div className="skills-grid">
            <div className="neo-card skill-card">
              <div className="skill-icon">Fg</div>
              <span className="skill-name">Figma</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Re</div>
              <span className="skill-name">React</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Ts</div>
              <span className="skill-name">TypeScript</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Tw</div>
              <span className="skill-name">Tailwind CSS</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Nd</div>
              <span className="skill-name">Node.js</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Wf</div>
              <span className="skill-name">Webflow</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Gt</div>
              <span className="skill-name">Git & GitHub</span>
            </div>
            <div className="neo-card skill-card">
              <div className="skill-icon">Fm</div>
              <span className="skill-name">Framer Motion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="neo-card contact-card">
            <div className="contact-grid">
              
              <div className="contact-info">
                <h2>Let's Work Together</h2>
                <p>Have an exciting project or idea you'd like to collaborate on? Reach out and let's build something unforgettable.</p>
                
                <div className="contact-methods">
                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-method-title">Email</div>
                      <a href="mailto:hello@johnsmith.com" className="contact-method-value">hello@johnsmith.com</a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-method-title">Phone</div>
                      <a href="tel:+14165550199" className="contact-method-value">+1 (416) 555-0199</a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-method-title">Location</div>
                      <span className="contact-method-value">Toronto, Ontario</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {formSubmitted ? (
                  <div className="neo-card" style={{ padding: '32px', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Thank You!</h3>
                    <p style={{ fontWeight: 600 }}>Your message has been sent successfully. I'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-input" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        className="form-input" 
                        rows={4} 
                        required 
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can I help you?"
                      />
                    </div>
                    <button type="submit" className="neo-btn neo-btn-primary">
                      Send Message
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            John<span>Smith</span>
          </div>
          <p className="footer-copyright">
            © 2026 John Smith. All rights reserved. Crafting premium user experiences.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;