import "../scss/Login.scss";

function Login() {
  return (
    <div id="login">
      <div className="content-container">
        <form id="login-form">
          <h2>
            SkillBanao <span>Login</span>
          </h2>
          <input type="email" placeholder="Email" id="email" />
          <button type="submit" id="log-in-btn">
            LOGIN WITH EMAIL
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
