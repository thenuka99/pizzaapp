import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import EmployeeListComponent from "./components/EmployeeListComponent/EmployeeListComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
  <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<EmployeeListComponent/>} />
          {/* <Route path="/category" exact element={<CategoryPageComponent/>} />
          <Route path='*' element={<Error/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
