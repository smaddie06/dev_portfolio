import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";

function Orange() {
  return (
    <div>
      <Blank />
      <StretchEquals text="-" />
      <Blank number={3} slash={false} />
      <StretchEquals text="-" slash={false} />
      <Blank number={3} slash={false} />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="/" />
      <StretchEquals text="*" />
      <Blank number={2} />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="+" />
      <Blank number={7} />
      <StretchEquals text="/" />
      <Blank number={6} />
      <StretchEquals text="-" />
      <Blank number={16} />
      <StretchEquals text="-" />
      <Blank number={4} />
      <StretchEquals text="-" />
      <StretchEquals text="*" />
      <Blank number={9} />
      <StretchEquals text="-" />
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "0px",
        }}
      >
        <span style={{ fontSize: "50px", alignSelf: "right", padding: "0px" }}>
          The portfolio of Maddie Bailey,
        </span>
        <span style={{ fontSize: "50px", alignSelf: "right", padding: "0px" }}>
          a computational biologist
        </span>
        <span style={{ fontSize: "50px", alignSelf: "right", padding: "0px" }}>
          and bioengineer
        </span>
        <span style={{ fontSize: "50px", alignSelf: "right", padding: "0px" }}>
          studying at Harvard Univeristy
        </span>
        <span style={{ fontSize: "50px", alignSelf: "left", padding: "0px" }}>
          - View CV
        </span>
        <span style={{ fontSize: "50px", alignSelf: "left", padding: "0px" }}>
          - View GitHub
        </span>
      </div>

      <Blank number={26} />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <Blank number={17} slash={false} />
      <StretchEquals text="-" />
      <Blank number={4} />
      <StretchEquals text="-" />
      <Blank number={6} />
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
        <span style={{ fontSize: "250px" }}>Projects</span>
      </div>
      <Blank number={16} />
      <StretchEquals text="-" />
      <Blank number={2} />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <Blank number={5} />
      <StretchEquals text="-" />
      <Blank number={6} />
      <StretchEquals text="*" />
      <Blank number={3} />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="*" />
      <Blank number={2} />
      <StretchEquals text="/" />
    </div>
  );
}

export default Orange;
