import "../scss/Navbar.scss";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="content-container">
        <div className="content">
          <div className="logo-title">
            <img src="" alt="logo" />
            <h1>SkillBanao</h1>
          </div>
          <ul className="links">
            <li>
              <a href="#">Chat with CA</a>
            </li>
            <li>
              <a href="#">Chat with Lawyer</a>
            </li>
            <li>
              <a href="#">Book a Chat</a>
            </li>
            <li>
              <a href="#">Skillmail</a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-person-fill"></i>Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
