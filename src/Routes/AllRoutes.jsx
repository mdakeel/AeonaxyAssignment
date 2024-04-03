import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../Shared/NavBar";
import { Home } from "../Components/Home";
import { Categories } from "../Components/Categories";
import { Footer } from "../Shared/Footer";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
            < Categories />
            <Footer />
          </>
        }
      />
     
    </Routes>
  );
};