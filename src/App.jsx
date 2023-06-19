import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
