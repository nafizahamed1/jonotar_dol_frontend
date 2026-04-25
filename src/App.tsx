import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MembershipPopup from "./components/MembershipPopup";

import Home from "./pages/Home";
import News from "./pages/News";
import Leaders from "./pages/Leaders";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Manifesto from "./pages/Manifesto";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ManageNews from "./pages/ManageNews";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageLeaders from "./pages/ManageLeaders";
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
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/news"
          element={
            <ProtectedRoute>
              <ManageNews />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/leaders"
          element={
            <ProtectedRoute>
              <ManageLeaders />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;

