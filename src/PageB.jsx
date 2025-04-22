import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import React from "react";

const sections = {
  foo: "Foo is a concept both elegant and absurd. In the digital fog, it emerges like static clarity. Foo transcends.",
  bar: "Bar stands rigid like a boundary, but its limits are illusions of the mind. Bar is a mirror to constraint.",
  baz: "Baz oscillates wildly — neither here nor there, always in flux. It resists interpretation and dances freely.",
};

export default function PageB() {
  const [params] = useSearchParams();
  const highlight = params.get("highlight");

  const refs = {
    foo: useRef(null),
    bar: useRef(null),
    baz: useRef(null),
  };

  useEffect(() => {
    if (highlight && refs[highlight]?.current) {
      refs[highlight].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlight]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page B</h1>
      {Object.entries(sections).map(([key, text]) => (
        <p
          key={key}
          ref={refs[key]}
          style={{
            backgroundColor: highlight === key ? "yellow" : "transparent",
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "0.5rem",
          }}
        >
          <strong>{key.toUpperCase()}:</strong> {text} and some{" "}
          <span style={{ backgroundColor: "yellow" }}>
            This sentence is highlighted.
          </span>{" "}
          more
        </p>
      ))}
    </div>
  );
}
