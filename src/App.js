import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//npm install react-router-dom
import Login from "./components/Login1";
import AppLayout from "./components/Layout";
import './mock/mock'; // 引入 mock 文件

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

