import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";

function Purple() {
  return (
    <div>
      <Blank />
      <StretchEquals text="+" />
      <StretchEquals text="+" />
      <StretchEquals text="-" />
      <Blank />
      <StretchEquals text="=" />
      <Blank number={3} />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="/" />
      <Blank />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="*" />
      <StretchEquals text="-" />

      <Blank number={17} slash={false} />
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: "190px" }}> 06</span>
      </div>
      <Blank number={16} slash={false} />
      <StretchEquals text="-" />
      <Blank number={4} slash={false} />
      <StretchEquals text="-" />
      <Blank number={10} />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="-" />
      <StretchEquals text="=" />
      <Blank number={3} />
      <StretchEquals text="=" />
      <StretchEquals text="+" />
      <Blank number={2} />
      <StretchEquals text="=" />
      <Blank number={3} />
      <StretchEquals text="=" />
      <StretchEquals text="+" />
      <StretchEquals text="/" />
      <StretchEquals text="=" />
      <Blank number={2} />
      <StretchEquals text="+" />
      <StretchEquals text="=" />
      <StretchEquals text="=" />
      <StretchEquals text="=" />
      <StretchEquals text="/" />
      <Blank />
      <StretchEquals text="-" />
      <Blank number={6} />
      <StretchEquals text="*" />
      <Blank number={2} />
      <Blank number={60} slash={false} />
      <Blank />
      <StretchEquals text="*" />
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="/" />
    </div>
  );
}
export default Purple;
