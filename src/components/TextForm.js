import React, { useState } from "react";

export default function TextForm(props) {
  const { text, setText } = props; // 👈 ab text aur setText App.js se aayega
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const saveToHistory = (newText) => {
    setHistory([...history, text]);
    setRedoStack([]);
    setText(newText);
  };

  // Convert to Uppercase
  const handleUpClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text!", "warning");
      return;
    }
    saveToHistory(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  // Convert to Lowercase
  const handleLoClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text!", "warning");
      return;
    }
    saveToHistory(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  // Capitalize
  const handleCapitalizeClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text!", "warning");
      return;
    }
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    saveToHistory(newText);
    props.showAlert("Converted to Capitalizecase!", "success");
  };

  // Sentence Case
  const handleSentenceClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text!", "warning");
      return;
    }
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    saveToHistory(newText);
    props.showAlert("Converted to Sentencecase!", "success");
  };

  // Remove Extra Spaces
  const handleRemoveExtraSpaces = () => {
    if (text.trim().length === 0) {
      props.showAlert("Nothing to clean!", "warning");
      return;
    }
    let newText = text.split(/\s+/).join(" ").trim();
    saveToHistory(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  // Copy Text
  const handleCopyText = () => {
    if (text.trim().length === 0) {
      props.showAlert("Nothing to copy!", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Clear Text
  const handleClearClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Nothing to clear!", "warning");
      return;
    }
    saveToHistory("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Title Case
  const handleTitleCase = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text!", "warning");
      return;
    }
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
    saveToHistory(newText);
    props.showAlert("Converted to Title Case!", "success");
  };

  // Extract Numbers
  const handleExtractNumbers = () => {
    if (text.trim().length === 0) {
      props.showAlert("No text available!", "warning");
      return;
    }
    let numbers = text.match(/\d+/g);
    if (numbers) {
      let newText = numbers.join(" ");
      saveToHistory(newText);
      props.showAlert("Numbers Extracted!", "success");
    } else {
      props.showAlert("No numbers found!", "warning");
    }
  };

  // Text to Speech
  const handleSpeak = () => {
    if (text.trim().length === 0) {
      props.showAlert("Nothing to speak!", "warning");
      return;
    }
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking Text...", "success");
  };

  // Extract Links
  const handleExtractLinks = () => {
    if (text.trim().length === 0) {
      props.showAlert("No text available!", "warning");
      return;
    }
    let links = text.match(
      /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9.-]+\.[a-z]{2,})/g
    );
    if (links) {
      let newText = links.join("\n");
      saveToHistory(newText);
      props.showAlert("Links Extracted!", "success");
    } else {
      props.showAlert("No links found!", "warning");
    }
  };

  // Change Text with Prompt
  const handleChangeText = () => {
    if (text.trim().length === 0) {
      props.showAlert("No text available!", "warning");
      return;
    }
    let findText = prompt("Enter the text you want to replace:");
    if (findText === null || findText.trim() === "") return;

    let replaceText = prompt(`Replace "${findText}" with:`);
    if (replaceText === null) return;

    let newText = text.replace(new RegExp(findText, "g"), replaceText);

    if (newText === text) {
      props.showAlert(`"${findText}" not found in text!`, "warning");
    } else {
      saveToHistory(newText);
      props.showAlert(
        `Replaced "${findText}" with "${replaceText}"!`,
        "success"
      );
    }
  };

  // Undo
  const handleUndo = () => {
    if (history.length > 0) {
      const prevText = history[history.length - 1];
      setRedoStack([text, ...redoStack]);
      setHistory(history.slice(0, -1));
      setText(prevText);
      props.showAlert("Undo Successful!", "success");
    }
  };

  // Redo
  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextText = redoStack[0];
      setHistory([...history, text]);
      setRedoStack(redoStack.slice(1));
      setText(nextText);
      props.showAlert("Redo Successful!", "success");
    }
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

        {/* Buttons */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleSentenceClick}
        >
          Sentence Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>
          Title Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtractNumbers}
        >
          Extract Numbers
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtractLinks}
        >
          Extract Links
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>
          Speak Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleChangeText}
        >
          Change Text
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUndo}
          disabled={history.length === 0}
        >
          Undo Action
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleRedo}
          disabled={redoStack.length === 0}
        >
          Redo Action
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {(
            0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0).length
          ).toFixed(2)}{" "}
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
