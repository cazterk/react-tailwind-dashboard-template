import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <p>Hi</p>
      </Layout>
    </Router>
  );
}

export default App;
