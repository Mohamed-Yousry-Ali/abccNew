import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ConsTruction from "../pages/ConsTruction";
import Finishes from "../pages/Finishes";
import Sports from "../pages/Sports";
import Maintinance from "../pages/Maintinance";
import Clearance from "../pages/Clearance";
import RoadTransport from "../pages/RoadTransport";
import SeaFreight from "../pages/SeaFreight";
import AirFreight from "../pages/AirFreight";
import LogisticsServices from "../pages/LogisticsServices";
import CustomsBusiness from "../pages/CustomsBusiness";
import Vision from "../pages/Vision";
import HomeVideo from "../pages/HomeVideo";
import CostructFteat from "../pages/CostructFteat";
import LogisticFeat from "../pages/LogisticFeat";
import Commerce from "../pages/Commerce";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomeVideo />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contractors" element={<ConsTruction />} />
        <Route path="finishes" element={<Finishes />} />
        <Route path="sports" element={<Sports />} />
        <Route path="maintenance" element={<Maintinance />} />
        <Route path="clearance" element={<Clearance />} />
        <Route path="Road-Transport" element={<RoadTransport />} />
        <Route path="Sea-Freight" element={<SeaFreight />} />
        <Route path="Air-Freight" element={<AirFreight />} />
        <Route path="Customs-Business" element={<CustomsBusiness />} />
        <Route path="Logistics-Services" element={<LogisticsServices />} />
        <Route path="vision" element={<Vision />} />
        <Route path="contruction" element={<CostructFteat />} />
        <Route path="logistics" element={<LogisticFeat />} />
        <Route path="commerce" element={<Commerce />} />
      </Route>
    </>
  )
);

export default router;
