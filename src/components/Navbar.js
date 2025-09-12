import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: props.theme.nav,
        color: props.theme.text,
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ color: props.theme.text }}
        >
          {props.title}
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: props.theme.text }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                style={{ color: props.theme.text }}
              >
                {props.aboutText}
              </a>
            </li>
          </ul>

          {/* 🎨 Color Theme Palettes (hide if dark mode ON) */}
          {!props.isDarkMode && (
            <div className="d-flex">
              <div
                className="rounded mx-2"
                onClick={() =>
                  props.changeTheme({
                    base: "#90caf9",
                    nav: "#64b5f6",
                    text: "black",
                  })
                }
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  backgroundColor: "#2896f0ff",
                }}
              ></div>

              <div
                className="rounded mx-2"
                onClick={() =>
                  props.changeTheme({
                    base: "#a5d6a7",
                    nav: "#81c784",
                    text: "black",
                  })
                }
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  backgroundColor: "#0a9f11ff",
                }}
              ></div>

              <div
                className="rounded mx-2"
                onClick={() =>
                  props.changeTheme({
                    base: "#ef9a9a",
                    nav: "#e57373",
                    text: "black",
                  })
                }
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  backgroundColor: "#e62323ff",
                }}
              ></div>

              <div
                className="rounded mx-2"
                onClick={() =>
                  props.changeTheme({
                    base: "#b39ddb",
                    nav: "#9575cd",
                    text: "black",
                  })
                }
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  backgroundColor: "#8541d8ff",
                }}
              ></div>

              <div
                className="rounded mx-2"
                onClick={() =>
                  props.changeTheme({
                    base: "#dee2e6",
                    nav: "#adb5bd",
                    text: "black",
                  })
                }
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  backgroundColor: "#adb5bd",
                  border: "0.5px solid black",
                }}
              ></div>

              <div
                className="rounded mx-2"
                onClick={() =>
                  props.changeTheme({
                    base: "#343a40",
                    nav: "#212529",
                    text: "white",
                  })
                }
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  backgroundColor: "#212529",
                  border: "0.5px solid white",
                }}
              ></div>
            </div>
          )}

          {/* 🌙 Dark Mode Toggle */}
          <div
            className={`form-check form-switch text-${
              props.isDarkMode ? "light" : "dark"
            } mx-3`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              checked={props.isDarkMode}
              readOnly
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
