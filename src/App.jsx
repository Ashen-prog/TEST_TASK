import Header from "./components/Header";
import CatGallery from "./components/CatGallery";
import InfoBar from "./components/InfoBar";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <CatGallery />
      <InfoBar />
    </div>
  );
}

export default App;
