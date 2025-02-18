import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-0 md:ml-64 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
