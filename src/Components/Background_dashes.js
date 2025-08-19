import React, { useRef, useEffect, useState } from "react";
import Table from "./Table";
import Red from "../Columns/Red";
import Orange from "../Columns/Orange";
import Yellow from "../Columns/Yellow";
import Green from "../Columns/Green";
import Blue from "../Columns/Blue";
import Purple from "../Columns/Purple";
import Line_number from "./line_number";
import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";
function Background_dashes() {
  return (
    <div
      style={{
        width: "100vw",
        zIndex: "-1",
        display: "flex",
        fontSize: "12px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "5vw",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#302c2c",
        }}
      >
        <Line_number />
        <StretchEquals text="*" small={true} />
      </div>

      <div
        style={{
          width: "95vw",
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 1, // Equal width for each

            backgroundColor: "#302c2c",
            minWidth: 0, // ✅ this is the key fix
            overflow: "hidden",
          }}
        >
          <Red />
        </div>

        <div
          style={{
            flex: 1, // Equal width for each

            backgroundColor: "#302c2c", // Optional color
            minWidth: 0, // ✅ this is the key fix
            overflow: "hidden",
          }}
        >
          <Orange />
        </div>
        <div
          style={{
            flex: 1, // Equal width for each

            backgroundColor: "#302c2c", // Optional color
            minWidth: 0, // ✅ this is the key fix
            overflow: "hidden",
          }}
        >
          <Yellow />
        </div>
        <div
          style={{
            flex: 1, // Equal width for each

            backgroundColor: "#302c2c", // Optional color
            minWidth: 0, // ✅ this is the key fix
            overflow: "hidden",
          }}
        >
          <Green />
        </div>
        <div
          style={{
            flex: 1, // Equal width for each

            backgroundColor: "#302c2c", // Optional color
            minWidth: 0, // ✅ this is the key fix
            overflow: "hidden",
          }}
        >
          <Blue />
        </div>
        <div
          style={{
            flex: 1, // Equal width for each

            backgroundColor: "#302c2c", // Optional color
            minWidth: 0, // ✅ this is the key fix
            overflow: "hidden",
          }}
        >
          <Purple />
        </div>
      </div>
    </div>
  );
}

export default Background_dashes;
