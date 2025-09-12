import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  // Convert to Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  // Convert to Capitalize
  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalizecase!", "success");
  };

  // Convert to Sentence case
  const handleSentenceClick = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Sentencecase!", "success");
  };

  // Remove Extra Spaces
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  // Copy Text
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // ✅ Title Case
  const handleTitleCase = () => {
    let smallWords = ["a", "an", "the", "and", "or", "of", "in", "on"];
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0 || !smallWords.includes(word)
          ? word.charAt(0).toUpperCase() + word.slice(1)
          : word
      )
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Title Case!", "success");
  };

  // ✅ Extract Numbers
  const handleExtractNumbers = () => {
    let numbers = text.match(/\d+/g);
    let newText = numbers ? numbers.join(" ") : "No numbers found!";
    setText(newText);
    props.showAlert("Numbers Extracted!", "success");
  };

  // ✅ Text to Speech
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking Text...", "success");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.theme.nav,
              color: props.theme.text,
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* Default Buttons */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>
          Sentence Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
         {/* ✅ Extra Feature Buttons */}
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>
          Title Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtractNumbers}>
          Extract Numbers
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeak}>
          Speak Text
        </button>
      </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopyText}>
          Copy
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>
          Clear
        </button>

       

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          Minutes Read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the Textbox Above To Preview It."}
        </p>
      </div>
    </>
  );
}
