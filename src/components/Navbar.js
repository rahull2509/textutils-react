import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//  Utility function to calculate mid color
const getMidColor = (color1, color2) => {
  const hexToRgb = (hex) => {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  return rgbToHex(
    Math.round((r1 + r2) / 2),
    Math.round((g1 + g2) / 2),
    Math.round((b1 + b2) / 2)
  );
};

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
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: props.theme.text }}
        >
          {props.title}
        </Link>
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: props.theme.text }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: props.theme.text }}
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* Color Theme Palettes */}
          <div className="d-flex">
            {/* Blue Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#90caf9",
                  nav: "#64b5f6",
                  mid: getMidColor("#90caf9", "#64b5f6"),
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

            {/* Green Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#a5d6a7",
                  nav: "#81c784",
                  mid: getMidColor("#a5d6a7", "#81c784"),
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

            {/* Red Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#ef9a9a",
                  nav: "#e57373",
                  mid: getMidColor("#ef9a9a", "#e57373"),
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

            {/* Purple Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#b39ddb",
                  nav: "#9575cd",
                  mid: getMidColor("#b39ddb", "#9575cd"),
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

            {/* Grey Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#dee2e6",
                  nav: "#adb5bd",
                  mid: getMidColor("#dee2e6", "#adb5bd"),
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

            {/* Dark Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#343a40",
                  nav: "#212529",
                  mid: getMidColor("#343a40", "#212529"),
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

            {/* White Theme */}
            <div
              className="rounded mx-2"
              onClick={() =>
                props.changeTheme({
                  base: "#ffffff",
                  nav: "#f1f3f5",
                  mid: getMidColor("#ffffff", "#f1f3f5"),
                  text: "black",
                })
              }
              style={{
                height: "20px",
                width: "20px",
                cursor: "pointer",
                backgroundColor: "#ffffff",
                border: "0.5px solid black",
              }}
            ></div>
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
  isDarkMode: PropTypes.bool,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
