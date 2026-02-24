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
import History from "./pages/about/History";
import AtAGlance from "./pages/about/AtAGlance";
import CitizenCharter from "./pages/about/CitizenCharter";
import HSC from "./pages/academic/HSC";
import Degree from "./pages/academic/Degree";
import Honours from "./pages/academic/Honours";
import Masters from "./pages/academic/Masters";
import DepartmentPage from "./pages/departments/DepartmentPage";
import GeneralNotice from "./pages/notices/GeneralNotice";
import OfficeOrders from "./pages/notices/OfficeOrders";
import WritersCorner from "./pages/writers/WritersCorner";
import ContactUs from "./pages/contact/ContactUs";

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
        <Route path="/about/history" element={<History />} />
        <Route path="/about/at-a-glance" element={<AtAGlance />} />
        <Route path="/about/citizen-charter" element={<CitizenCharter />} />
        <Route path="/academic/hsc" element={<HSC />} />
        <Route path="/academic/degree" element={<Degree />} />
        <Route path="/academic/honours" element={<Honours />} />
        <Route path="/academic/masters" element={<Masters />} />
        <Route path="/departments/:group/:department" element={<DepartmentPage />} />
        <Route path="/notices/general" element={<GeneralNotice />} />
        <Route path="/notices/office-orders" element={<OfficeOrders />} />
        <Route path="/writers-corner" element={<WritersCorner />} />.
        <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);