import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";

function Table() {
  return (
    <div
      style={{
        width: `${(9 / 19) * 100}vw`,
        font: "sans-serif",
        display: "flex",
        background: "#302c2c",
        color: "white",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          background: "#302c2c",
          fontSize: "12px",
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // ✅ this is the key fix
          overflow: "hidden",
        }}
      >
        <StretchEquals text="=" />
        <span style={{ height: "15px", fontSize: "14px", fontWeight: "bold" }}>
          / Professional Skills
        </span>
        <StretchEquals text="=" />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Languages</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Python</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ MATLAB</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ React</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ ReactNative</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ JavaScript</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Java</span>
        <StretchEquals text="=" slash={false} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          background: "#302c2c",
          fontSize: "12px",
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // ✅ this is the key fix
          overflow: "hidden",
        }}
      >
        <StretchEquals text="=" slash={false} />
        <Blank slash={false} />
        <StretchEquals text="=" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Skills</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>
          / Cell culture techniques
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>
          / High Performance Computing
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>
          / Machine Learning
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Image J</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Arduinos</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>
          / FirstTech Robotics
        </span>
        <StretchEquals text="=" slash={false} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          background: "#302c2c",
          fontSize: "12px",
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // ✅ this is the key fix
          overflow: "hidden",
        }}
      >
        <StretchEquals text="=" slash={false} />
        <Blank slash={false} />
        <StretchEquals text="=" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Admin</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ GitHub</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Slack</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Excel</span>
        <StretchEquals text="-" slash={false} />
        <Blank />
        <StretchEquals text="-" slash={false} />
        <Blank />
        <StretchEquals text="-" slash={false} />
        <Blank />
        <StretchEquals text="=" slash={false} />
      </div>
    </div>
  );
}
export default Table;
