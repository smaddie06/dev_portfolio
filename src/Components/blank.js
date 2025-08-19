function Blank(props) {
  const { slash = true } = props;
  const { number = 1 } = props;
  return (
    <>
      {Array.from({ length: number }).map((_, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "15px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontFamily: "monospace",
            display: "flex",
            justifyContent: "flex-start",
            color: "white",
          }}
        >
          {slash && "/"}
        </div>
      ))}
    </>
  );
}
export default Blank;
