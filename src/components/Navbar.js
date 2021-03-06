import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-scroll";
import "./Navbar.css";
import img1 from "./logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={img1} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="homeall"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Пошук
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="realEstate"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Нерухомість
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={5000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Контакти
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Вихід</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
