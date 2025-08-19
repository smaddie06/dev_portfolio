import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";
import Project_table from "../Components/Project_table";
function Yellow() {
  return (
    <div>
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="*" />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="=" />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="-" />
      <StretchEquals text="=" />
      <Blank number={6} />
      <StretchEquals text="=" />
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          color: "white",
          display: "flex",
          flexDirection: "row",
          padding: "0px",
        }}
      >
        <span style={{ fontSize: "230px", alignSelf: "right", padding: "0px" }}>
          Smaddie
        </span>
      </div>
      <Blank number={16} />
      <StretchEquals text="/" />
      <Blank number={4} />
      <StretchEquals text="/" />
      <Blank />
      <StretchEquals text="+" />
      <StretchEquals text="/" />
      <Blank />
      <StretchEquals text="+" />
      <Blank number={2} />
      <StretchEquals text="+" />
      <Blank number={3} />
      <StretchEquals text="-" />

      <Blank number={4} slash={false} />
      <StretchEquals text="-" />
      <Blank number={6} />
      <StretchEquals text="/" />
      <StretchEquals text="-" />
      <Blank number={2} />
      <StretchEquals text="-" />
      <Blank number={26} slash={false} />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <Blank number={17} slash={false} />
      <StretchEquals text="-" />
      <Blank number={11} />
      <StretchEquals text="-" />
      <Blank number={16} slash={false} />
      <StretchEquals text="-" slash={false} />
      <Blank number={2} slash={false} />

      <div style={{ zIndex: "3", position: "absolute" }}>
        <Project_table />
      </div>
      <Blank number={25} />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="/" />
    </div>
  );
}

export default Yellow;
