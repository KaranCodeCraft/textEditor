import "./App.css";
import Navbar from "./component/Navbar";
import Textfrom from "./component/Textfrom";
import About from "./component/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar tittle="Savi Vision" mode={mode} togglemode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Textfrom heading="Enter text to analyse below" mode={mode} />}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
