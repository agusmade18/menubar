//import react router dom
import { Routes, Route } from "react-router-dom";
import Home from "../Component/Content/Home";
import Gallery from "../Component/Content/Gallery";
import Portfolio from "../Component/Content/Portfolio";
import Contact from "../Component/Content/Contact";
import Profile from "../Component/Content/Profile";

function PublicRoutes() {
  return (
    <Routes>
      {/* ---------------------------------------------- */}
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/gallery" exact element={<Gallery />} />
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
}
export default PublicRoutes;
