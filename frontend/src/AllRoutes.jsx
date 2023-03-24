import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import SessionData from "./components/SessionData";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/api-response" element={<SessionData />} />
    </Routes>
  );
};

export default AllRoutes;
