function Line_number() {
  const numbers = Array.from({ length: 173 }, (_, i) => i + 1);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "flex-end",

          backgroundColor: "#302c2c",
        }}
      >
        {numbers.map((num) => (
          <span key={num} style={{ height: "15px", marginRight: "30px" }}>
            {num} |
          </span>
        ))}
      </div>
    </>
  );
}

export default Line_number;
