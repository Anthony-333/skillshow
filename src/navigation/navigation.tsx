import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Signup from "../pages/Signup/Signup";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Public />}> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        {/* </Route> */}

        {/* <Route element={<Private />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
