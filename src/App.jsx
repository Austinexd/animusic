import "./App.css";
import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Welcome from "./components/Welcome";
function App() {
  const musicRef = useRef();
  return (
    <>
      <Welcome musicRef={musicRef} />
      <Header musicRef={musicRef} />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
