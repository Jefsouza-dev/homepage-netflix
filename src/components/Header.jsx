import "./Header.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="">
          <img src={logo} alt="netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="">
          <img src={user} alt="user" />
        </a>
      </div>
    </header>
  );
};

export default Header;
