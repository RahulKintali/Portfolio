import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-0 md:ml-64 w-full p-6">
          <Routes>
            {/* Redirect the base URL to Home */}
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
