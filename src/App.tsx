import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
