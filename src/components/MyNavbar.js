import { useState, useEffect } from "react";

function MyNavbar() {
  const { activeLink, setActiveLink } = useState("home");
  const { scrolled, setScrolled } = useState(false);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolled]);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-light ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#logo">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          ></img>
          Eugene Van Zyl
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  activeLink === "home" ? "navbar-link active" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link`} href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("home")}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`navbar-link ${
                  activeLink === "skills" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("skills")}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`navbar-link ${
                  activeLink === "projects" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("projects")}
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <button
              className="contact-us"
              onClick={() => console.log("contact-us")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </div> */}
      </div>
    </nav>
  );
}
export default MyNavbar;
