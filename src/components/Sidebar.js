import logo from '../Photos/logo.jpeg';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <a href="https://github.com/vknguyen1" className="logo">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
        </div>
        <div className="btn-container">
          <button className="cybr-btn">
            About<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              About_
            </span>
            <span aria-hidden className="cybr-btn__tag">
              R25
            </span>
          </button>
          <button className="cybr-btn">
            Projects<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              Projects_
            </span>
            <span aria-hidden className="cybr-btn__tag">
              R25
            </span>
          </button>
          <button className="cybr-btn">
            Contact<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              Contact_
            </span>
            <span aria-hidden className="cybr-btn__tag">
              R25
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
