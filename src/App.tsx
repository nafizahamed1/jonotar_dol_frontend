import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MembershipPopup from "./components/MembershipPopup";

import Home from "./pages/Home";
import News from "./pages/News";
import Leaders from "./pages/Leaders";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <MembershipPopup />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

