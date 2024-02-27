import "./header.css";
import logo from "../../image/logo.png";
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-md  navbar-dark my-navbar">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand">
            <img
              src={logo}
              alt=""
              className="rounded-circle"
              style={{ width: "100px", height: "auto" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <NavLink to={"/"} className="nav-link">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to={"/services"} className="nav-link">
                  Services
                </NavLink>
              </NavItem>

              <NavItemDropDown>
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Learn
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/#" className="dropdown-item">
                      Learn about Dental Care
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="dropdown-item">
                      Tips for Dental Health
                    </a>
                  </li>
                </ul>
              </NavItemDropDown>

              <NavItem>
                <NavLink to="/support" className="nav-link">
                  Support
                </NavLink>
              </NavItem>

              <NavItem>
                <a href="/#" className="nav-link">
                  Deutsch
                </a>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
