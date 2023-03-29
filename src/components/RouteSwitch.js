import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Marina from "./Marina";
import Beach from "./Beach";
import Construction from "./Construction";
import TraderJoes from "./TraderJoes";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/marina" element={<Marina />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/traderjoes" element={<TraderJoes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;