import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // ✅ new state

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
      // Enable Dark Mode
      setIsDarkMode(true);
      setTheme({
        base: "#343a40",
        nav: "#212529",
        text: "white",
      });
      showAlert("Dark mode has been enabled", "success");
    } else {
      // Disable Dark Mode (reset to default light theme)
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
    setIsDarkMode(false); // ✅ palette click → dark mode OFF
    setTheme(newTheme);
    document.body.style.backgroundColor = newTheme.base;
    document.body.style.color = newTheme.text;
  };

  // apply base + text to body
  document.body.style.backgroundColor = theme.base;
  document.body.style.color = theme.text;

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        theme={theme}
        changeTheme={changeTheme}
        toggleMode={toggleMode}
        isDarkMode={isDarkMode}   // ✅ pass new state
      />

      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={isDarkMode ? "dark" : "light"}
          
  theme={theme}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
