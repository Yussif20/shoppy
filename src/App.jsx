import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainNav />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
