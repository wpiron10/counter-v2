import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <nav>
      <div className="logo-box">
        <img src={logo} alt="logo" />
        <h1>React Counter v2</h1>
      </div>
    </nav>
  );
};

export default Header;
