import React from "react";
import "./App.css";
import MainWindow from "./components/MainWindow";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
