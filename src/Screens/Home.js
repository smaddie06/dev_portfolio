import React from "react";
import theme from "../themes.js";
import Background_dashes from "../Components/Background_dashes.js";
// import { useNavigate } from "react-router-dom";

function Home() {
  const paraStyle = {
    ...theme.font.heading,
    fontSize: "20px",
    textAlign: "center",
    width: "75%",
    background: "white",
    marginTop: "30px",
    borderRadius: "10px",
    padding: "5px",
    border: "3px solid #0967c2",
    marginBottom: "75px",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        position: "absolute",
      }}
    >
      <Background_dashes />
    </div>
  );
}
export default Home;
