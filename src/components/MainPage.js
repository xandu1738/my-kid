import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Curriculum from "./pages/Curriculum";
import MakePayment from "./pages/MakePayment";

const MainPage = ({ toggle }) => {
  return (
    <div className="main-page">
      <NavBar toggle={toggle} />
      <Outlet />
    </div>
  );
};

const Display = ({ toggle }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage toggle={toggle} />}>
        <Route index element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/make-payment" element={<MakePayment />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Display;
