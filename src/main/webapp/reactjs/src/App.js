import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

// employee
import EmployeeListComponent from "./components/Employee/EmployeeListComponent/EmployeeListComponent";
import AddEmployeeComponent from "./components/Employee/AddEmployeeComponent/AddEmployeeComponent";
import UpdateEmployeeComponent from "./components/Employee/UpdateEmployeeComponent/UpdateEmployeeComponent";

// pizza
import AddPizzaComponent from "./components/Pizza/AddPizzaComponent/AddPizzaComponent";
import PizzaListComponent from "./components/Pizza/PizzaListComponent/PizzaListComponent";
import UpdatePizzaComponent from "./components/Pizza/UpdatePizzaComponent/UpdatePizzaComponent";

// shop
import AddShopComponent from "./components/Shop/AddShopComponent/AddShopComponent";
import UpdateShopComponent from "./components/Shop/UpdateShopComponent/UpdateShopComponent";
import ShopListComponent from "./components/Shop/ShopListComponent/ShopListComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          {/* employee routes */}
          <Route exact path="/employee" element={<EmployeeListComponent />} />
          <Route path="/addemployee" exact element={<AddEmployeeComponent />} />
          <Route path="/updateemployee/:id" exact element={<UpdateEmployeeComponent />} />

          {/* pizza routes */}
          <Route exact path="/pizza" element={<PizzaListComponent />} />
          <Route path="/addpizza" exact element={<AddPizzaComponent />} />
          <Route path="/updatepizza/:id" exact element={<UpdatePizzaComponent />} />

          {/* shop routes */}
          <Route exact path="/shop" element={<ShopListComponent />} />
          <Route path="/addshop" exact element={<AddShopComponent />} />
          <Route path="/updateshop/:id" exact element={<UpdateShopComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
