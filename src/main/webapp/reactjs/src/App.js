import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import EmployeeListComponent from "./components/Employee/EmployeeListComponent/EmployeeListComponent";
import AddEmployeeComponent from "./components/Employee/AddEmployeeComponent/AddEmployeeComponent";
import UpdateEmployeeComponent from "./components/Employee/UpdateEmployeeComponent/UpdateEmployeeComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          {/* employee routes */}
          <Route exact path="/employee" element={<EmployeeListComponent />} />
          <Route path="/addemployee" exact element={<AddEmployeeComponent />} />
          <Route path="/updateemployee/:id" exact element={<UpdateEmployeeComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
