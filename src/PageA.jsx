import { useState } from "react";
import React from "react";

const previews = {
  foo: "Foo is a concept both elegant and absurd. In the digital fog, it emerges like static clarity.",
  bar: "Bar stands rigid like a boundary, but its limits are illusions of the mind.",
  baz: "Baz oscillates wildly — neither here nor there, always in flux.",
};

export default function PageA() {
  const [hovered, setHovered] = useState(null);

  const openPageB = (section) => {
    const url = `/pageb?highlight=${section}`;
    window.open(url, "_blank");
  };

  const renderWord = (word) => (
    <span
      key={word}
      style={{
        color: "blue",
        cursor: "pointer",
        textDecoration: hovered === word ? "underline" : "none",
      }}
      onMouseEnter={() => setHovered(word)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => openPageB(word)}
    >
      {word}
    </span>
  );

  const text =
    "This is a paragraph about foo, bar, and baz in the world of tech and metaphor.";

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page A</h1>
      <p>
        {text.split(" ").map((word, i) => {
          const clean = word.replace(/[^a-z]/gi, "").toLowerCase();
          return previews[clean] ? (
            <>
              {renderWord(clean)}
              {hovered === clean && (
                <span
                  style={{ marginLeft: 8, color: "#666", fontStyle: "italic" }}
                >
                  – {previews[clean].slice(0, 50)}...
                </span>
              )}
              &nbsp;
            </>
          ) : (
            word + " "
          );
        })}
      </p>
    </div>
  );
}
