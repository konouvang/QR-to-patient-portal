import SideBar from "./Modules/SideBar/SideBar";
import "./App.css";
import MainPage from "./Modules/MainPage/MainPage";
import ScanBanner from "./Modules/ScanBanner/ScanBanner";

function App() {
  return (
    <div className="app-grid">
      <div className="vertical-ipad-banner">
        <ScanBanner />
      </div>
      <MainPage />
      <SideBar />
    </div>
  );
}

export default App;
