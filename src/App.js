import Content from "./components/Content";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Drawer />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div
          className="d-flex flex-column"
          style={{ flex: "1 1 auto", overflowY: "auto" }}
        >
          <Content />
        </div>
      </div>
    </div>
  );
}
