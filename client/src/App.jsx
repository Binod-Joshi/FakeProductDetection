import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import DetectManufacturer from "./components/DetectManufacturer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detectManufacturer" element={<DetectManufacturer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;