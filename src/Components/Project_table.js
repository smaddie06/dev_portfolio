import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";

function Project_table() {
  return (
    <div
      style={{
        width: `${(12 / 19) * 100}vw`,
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
          / Projects
        </span>
        <StretchEquals text="=" />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Title</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>/ Profet</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>/ Cell Cutter</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Electrotaxi model
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>/ StreetSmart</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>/ Grow</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
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
        <span style={{ height: "15px", fontSize: "14px" }}>/ Institution</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Harvard University, Dana Farber Cancer Institute
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Princeton Engineering
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Princeton Engineering
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / St Paul's Girls' School
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / St Paul's Girls' School
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / St Paul's Girls' School
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
        <span style={{ height: "15px", fontSize: "14px" }}>/ Role</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Software Intern
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Software Intern
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Software Intern
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Project Manager, Frontend Lead
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Project Manager
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>/ Coach</span>
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
        {" "}
        <StretchEquals text="=" slash={false} />
        <Blank slash={false} />
        <StretchEquals text="=" slash={false} />
        <span style={{ height: "15px", fontSize: "14px" }}>/ Tech</span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Python, Machine Learning, Statistics
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Hardware Programming, ImageJ
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Python, Machine Learning, ImageJ
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / ReactNative, Figma, App Design
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / ReactNative, Figma, App Design
        </span>
        <StretchEquals text="-" slash={false} />
        <span style={{ height: "30px", fontSize: "14px" }}>
          / Robotics, Java, TensorFlow
        </span>
        <StretchEquals text="=" slash={false} />
      </div>
    </div>
  );
}
export default Project_table;
