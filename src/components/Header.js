import logo from '../Photos/logo.jpeg';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="header-container">
          <a href="https://github.com/vknguyen1" className="logo">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <ul className="text-white">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
