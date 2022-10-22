import './App.css';
import { useState, useEffect } from 'react';
import About from './components/About';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Photos/logo.jpeg';

function App() {
  const [active, setActive] = useState('aboutCard');

  // let colors = ['#00f0ff', '#ff003c', '#FCEE0C'];
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    console.log('test');
  }, [active]);

  return (
    <div>
      <div className="navbar-container">
        <nav className="navbar">
          <a href="https://github.com/vknguyen1" className="navbar-brand">
            <img src={logo} className="mr-3 h-9 sm:h-9" alt="Logo" />
          </a>
          <div className="button-container">
            <button
              onClick={() => {
                setActive('aboutCard');
              }}
              className="cybr-btn"
            >
              About<span aria-hidden>_</span>
              <span aria-hidden className="cybr-btn__glitch">
                About_
              </span>
              <span aria-hidden className="cybr-btn__tag">
                R25
              </span>
            </button>
            <button
              onClick={() => {
                setActive('projectsCard');
              }}
              className="cybr-btn"
            >
              Projects<span aria-hidden>_</span>
              <span aria-hidden className="cybr-btn__glitch">
                Projects_
              </span>
              <span aria-hidden className="cybr-btn__tag">
                R25
              </span>
            </button>
            <button
              onClick={() => {
                setActive('contactCard');
              }}
              className="cybr-btn"
            >
              Contact<span aria-hidden>_</span>
              <span aria-hidden className="cybr-btn__glitch">
                Contact_
              </span>
              <span aria-hidden className="cybr-btn__tag">
                R25
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div className="main-page">
        {active === 'aboutCard' && <About title="About" />}
        {active === 'projectsCard' && <Project title="Projects" />}
        {active === 'contactCard' && <Contact title="Contact" />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
