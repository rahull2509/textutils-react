import React, { useState } from "react";

export default function TextForm(props) {
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
    let textarea = document.getElementById("myBox"); // textarea ka id
    textarea.select(); // pura text select hoga
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.theme.nav, // uses navbar color
              color: props.theme.text, // uses text color from theme
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeClick}
        >
          Convert to Capitalize
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>
          Convert to Sentence
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>

        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0)
              .length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it."}
        </p>
      </div>
    </>
  );
}
