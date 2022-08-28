import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Tips from "./Components/Tips";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "../thumbnail.png";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <h3>
            <a href="https://github.com/nawed2611/health-saver">GitHub Repo</a>
          </h3>
          <Tips />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
