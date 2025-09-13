import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const [text, setText] = useState("");

  const [theme, setTheme] = useState({
    base: "white",
    nav: "#f8f9fa",
    text: "black",
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (!isDarkMode) {
      setIsDarkMode(true);
      setTheme({
        base: "#343a40",
        nav: "#212529",
        text: "white",
      });
      showAlert("Dark mode has been enabled", "success");
    } else {
      setIsDarkMode(false);
      setTheme({
        base: "white",
        nav: "#f8f9fa",
        text: "black",
      });
      showAlert("Light mode has been enabled", "success");
    }
  };

  const changeTheme = (newTheme) => {
    setIsDarkMode(false);
    setTheme(newTheme);
    document.body.style.backgroundColor = newTheme.base;
    document.body.style.color = newTheme.text;
  };

  document.body.style.backgroundColor = theme.base;
  document.body.style.color = theme.text;

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          theme={theme}
          changeTheme={changeTheme}
          toggleMode={toggleMode}
          isDarkMode={isDarkMode}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About theme={theme} />} />

            <Route
              path="/"
              element={
                <TextForm
                  text={text}        
                  setText={setText}  
                  showAlert={showAlert}
                  heading="Enter the Text To Analyze Below"
                  mode={isDarkMode ? "dark" : "light"}
                  theme={theme}
                />
              }
            />
          </Routes>
          <Footer theme={theme} />
        </div>
      </Router>
    </>
  );
}

export default App;
