import StretchEquals from "../Components/mini_dash";
import Blank from "../Components/blank";
import Table from "../Components/Table";
function Green() {
  return (
    <div>
      <StretchEquals text="/" />
      <Blank number={3} />
      <StretchEquals text="-" />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <StretchEquals text="=" />
      <Blank />
      <StretchEquals text="*" />
      <Blank number={2} />
      <StretchEquals text="+" />
      <Blank />
      <StretchEquals text="-" />

      <Blank number={17} slash={false} />
      <Blank number={16} />
      <StretchEquals text="-" />
      <Blank number={4} slash={false} />
      <StretchEquals text="-" />
      <StretchEquals text="+" />
      <Blank number={7} />
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="-" />
      <Blank number={26} slash={false} />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <StretchEquals text="-" />
      <Blank number={11} slash={false} />
      <div style={{ zIndex: "3", position: "absolute" }}>
        <Table />
      </div>
      <Blank number={6} slash={false} />
      <StretchEquals text="-" />
      <Blank number={4} />
      <Blank number={50} slash={false} />
      <StretchEquals text="*" />
      <Blank />
      <StretchEquals text="/" />
      <Blank />
      <StretchEquals text="/" />
    </div>
  );
}
export default Green;
