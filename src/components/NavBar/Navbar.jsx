import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="logo" src="../images/joystick-logo.png" alt="aaaa" />
      <nav>
        <ul className="list-container">
          <li>
            <Link to={"/category/pc"} className="navbar-button">
              PC
            </Link>
          </li>
          <li>
            <Link to={"/category/playstation"} className="navbar-button">
              PlayStation
            </Link>
          </li>
          <li>
            <Link to={"/category/xbox"} className="navbar-button">
              XBOX
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
