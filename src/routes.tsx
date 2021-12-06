import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
