import React, { useRef, useEffect, useState } from "react";
import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";

function Red() {
  return (
    <div>
      <Blank />
      <StretchEquals text="-" />
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: "50px" }}>Bioengineer</span>
        <span style={{ fontSize: "50px" }}> Coder</span>
      </div>
      <Blank number={3} slash={false} />
      <StretchEquals text="-" />
      <Blank number={3} />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <Blank number={2} />
      <StretchEquals text="*" />
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="=" />
      <StretchEquals text="*" />
      <Blank number={8} />
      <StretchEquals text="/" />
      <StretchEquals text="-" />
      <Blank number={3} />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="=" />
      <Blank number={3} />
      <StretchEquals text="+" />
      <Blank number={2} />
      <StretchEquals text="+" />
      <Blank number={9} />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="/" />
      <Blank />
      <StretchEquals text="=" />
      <Blank number={10} />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="*" />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="/" />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="-" />
      <StretchEquals text="=" />
      <StretchEquals text="-" />
      <Blank number={2} />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="+" />
      <StretchEquals text="=" />
      <Blank number={3} />
      <StretchEquals text="=" />
      <StretchEquals text="=" />
      <StretchEquals text="-" />
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          color: "white",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "250px" }}>Skills</span>
      </div>
      <Blank number={17} />
      <StretchEquals text="-" />
      <Blank number={4} />
      <StretchEquals text="-" />
      <Blank number={2} />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="/" />
      <StretchEquals text="+" />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="+" />
      <StretchEquals text="*" />
      <Blank number={3} />
      <StretchEquals text="*" />
      <Blank number={5} />
      <StretchEquals text="*" />
      <Blank number={3} />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="*" />
      <StretchEquals text="-" />
      <StretchEquals text="/" />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="+" />
      <Blank number={3} />
      <StretchEquals text="-" />
      <Blank number={6} />
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="-" />
      <Blank number={5} />
      <StretchEquals text="/" />
      <StretchEquals text="/" />
    </div>
  );
}
export default Red;
