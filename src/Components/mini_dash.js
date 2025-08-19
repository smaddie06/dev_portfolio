import React, { useRef, useEffect, useState } from "react";

function StretchEquals(props) {
  const containerRef = useRef(null);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [fontSize] = useState(12); // or allow as a prop
  const { small = false } = props;
  const text = small ? props.text.repeat(4) : props.text.repeat(25);
  const { slash = true } = props;

  useEffect(() => {
    function updateSpacing() {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const charCount = text.length;

      const estimatedCharWidth = 0.6 * fontSize;
      const totalCharWidth = charCount * estimatedCharWidth;
      const spaceToFill = containerWidth - totalCharWidth;
      const spacing = spaceToFill / (charCount - 1);

      setLetterSpacing(spacing > 0 ? spacing : 0);
    }

    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, [text, fontSize]);

  return (
    <div
      ref={containerRef}
      style={{
        width: small === false ? "100%" : undefined,
        fontFamily: "monospace",
        color: "white",
        fontSize: `${fontSize}px`,
        whiteSpace: "nowrap",
        overflow: "hidden",
        height: "15px", // fixed height
        lineHeight: "15px",
      }}
    >
      <span
        style={{
          letterSpacing: `${letterSpacing}px`,
          userSelect: "none",
        }}
      >
        {slash ? "/" + text : text}
      </span>
    </div>
  );
}

export default StretchEquals;
