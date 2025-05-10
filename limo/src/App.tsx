import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LimoRental from "./pages/LimoRental";
import  Fleet  from "./pages/Fleet";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<LimoRental />} />
          <Route path="/fleet" element={<Fleet />} />
        </Routes>
      </div>
    </Router>
  );
}

