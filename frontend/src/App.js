import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import CatDashboard from "./Admin_Dashboard/CatDashboard";
import Main from "./Admin_Dashboard/Main";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import EditUser from "./Admin_Dashboard/EditUser";


function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route
          path="/admin"
          element={
            isAuthenticate ? (
              <Main />
            ) : (
              <Login setIsAuthenticate={setIsAuthenticate} />
            )
          }
        />
        <Route
          path="/category"
          element={
            isAuthenticate ? (
              <CatDashboard />
            ) : (
              <Login setIsAuthenticate={setIsAuthenticate} />
            )
          }
        />
        <Route
          path="/admin/edituser"
          element={
            isAuthenticate ? (
              <EditUser />
            ) : (
              <Login setIsAuthenticate={setIsAuthenticate} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
