import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import DetectManufacturer from "./components/DetectManufacturer";
import DetectProduct from "./components/DetectProduct";
import ManufacturerList from "./components/list/ManufacturerList";
import ProductList from "./components/list/ProductList";
import RegisterManufacturer from "./components/register/RegisterManufacturer";
import CreateProduct from "./components/register/CreateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detectProduct" element={<DetectProduct />} />
          <Route path="/detectManufacturer" element={<DetectManufacturer />} />
          <Route path="/manufacturerList" element={<ManufacturerList />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/registerManufacturer" element={<RegisterManufacturer/>} />
          <Route path="/createProduct" element={<CreateProduct/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;