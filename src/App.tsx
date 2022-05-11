import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Content from "./pages/content";
import Forms from "./pages/forms";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/contact" element={<Content />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
