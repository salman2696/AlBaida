import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import FacilityManagement from "./pages/divisions/FacilityManagement";
import Agriculture from "./pages/divisions/Agriculture";
import Contracting from "./pages/divisions/Contracting";
import Infrastructure from "./pages/divisions/Infrastructure";
import CleaningServices from "./pages/divisions/CleaningServices";
import HeavyEquipmentRental from "./pages/divisions/HeavyEquipmentRental";
import HrManagement from "./pages/divisions/HrManagement";
import CargoLogistics from "./pages/divisions/CargoLogistics";
import EngineeringConsultancy from "./pages/divisions/EngineeringConsultancy";
import BussinesManagement from "./pages/divisions/BussinesManagement";
import AgencyRepresentation from "./pages/divisions/AgencyRepresentation";
import Constructon from "./pages/divisions/Constructon";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/divisions/facility-management"
            element={<FacilityManagement />}
          />
          <Route
            path="/divisions/agriculture-projects"
            element={<Agriculture />}
          />
          <Route path="/divisions/contracting" element={<Contracting />} />
          <Route
            path="/divisions/infrastructure"
            element={<Infrastructure />}
          />
          <Route
            path="/divisions/cleaning-services"
            element={<CleaningServices />}
          />
          <Route
            path="/divisions/heavy-equipment-rental"
            element={<HeavyEquipmentRental />}
          />
          <Route
            path="/divisions/human-resource-managament"
            element={<HrManagement />}
          />
          <Route
            path="/divisions/cargo-logistics"
            element={<CargoLogistics />}
          />
          <Route
            path="/divisions/engineering-consultancy"
            element={<EngineeringConsultancy />}
          />
          <Route
            path="/divisions/business-management-consulancy"
            element={<BussinesManagement />}
          />
          <Route
            path="/divisions/agency-and-representation"
            element={<AgencyRepresentation />}
          />
          <Route path="/divisions/construction" element={<Constructon />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
