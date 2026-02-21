import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Principal from "./pages/administration/Principal";
import VicePrincipal from "./pages/administration/VicePrincipal";
import FormerPrincipals from "./pages/administration/FormerPrincipals";
import AcademicCouncil from "./pages/administration/AcademicCouncil";
import TeachersCouncil from "./pages/administration/TeachersCouncil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/administration/principal" element={<Principal />} />
        <Route path="/administration/vice-principal" element={<VicePrincipal />} />
        <Route path="/administration/former-principals" element={<FormerPrincipals />} />
        <Route path="/administration/academic-council" element={<AcademicCouncil />} />
        <Route path="/administration/teachers-council" element={<TeachersCouncil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);