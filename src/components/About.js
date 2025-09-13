import React from "react";

export default function About({ theme }) {
  const myStyle = {
    color: theme.text,
    backgroundColor: theme.base,
  };

  const accordionStyle = {
    color: theme.text,
    backgroundColor: theme.nav, // for header and button use nav
  };

  const bodyStyle = {
    color: theme.text,
    backgroundColor: theme.mid, // for collapse-body use mid
  };

  // if theme is black (nav = #212529) then arrow becomes white
  const arrowClass = theme.nav === "#212529" ? "accordion-dark" : "";

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        {/* Item 1 */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${arrowClass}`}
              type="button"
              style={accordionStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              <strong>TextUtils</strong> is a lightweight and efficient text
              utility application designed to make your everyday text editing
              tasks faster and easier. Whether you want to convert your text to
              <em> uppercase</em> or <em>lowercase</em>, remove extra spaces,
              copy text with a single click, or calculate word and character
              counts — TextUtils has you covered.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${arrowClass}`}
              style={accordionStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              <strong>TextUtils</strong> is a <em>completely free</em> tool. No
              login or payment required — just open it in your browser and start
              editing text instantly on mobile or desktop.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${arrowClass}`}
              style={accordionStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatibility
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              <strong>TextUtils</strong> works seamlessly across all{" "}
              <em>modern browsers</em> like Chrome, Firefox, Safari, Edge, and
              even Internet Explorer.
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h2>Why Choose TextUtils?</h2>
        <p>
          In today’s fast-paced digital world, managing and analyzing text has
          become an essential task. <strong>TextUtils</strong> was created to
          provide users with a simple, clean, and efficient interface for
          handling their text without distractions.
        </p>
        <p>
          With its responsive design and customizable themes, it’s not just a
          tool but also a companion for all your text editing needs. Whether
          you’re drafting an email, preparing study notes, or formatting content
          for your blog — TextUtils ensures speed, accuracy, and convenience.
        </p>
      </div>
    </div>
  );
}