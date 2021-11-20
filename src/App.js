import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login.component";
import Home from "./components/Home/home";
import Header from "./components/Header/Header";

function App() {
  const [title, updateTitle] = useState(null);
  return (
    <div className="App">
      <Header title={title} />
      <div className="container d-flex align-items-center flex-column">
        <Routes>
          <Route path="/" element={<Login updateTitle={updateTitle} />} />
          <Route path="/home" element={<Home updateTitle={updateTitle} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
