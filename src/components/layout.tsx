import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar />
        {/* <Router>
          <Routes>
            <Route path="/" />
          </Routes>
        </Router> */}
        {/* <div className="flex-auto bg-green-200 ">{children}</div> */}
      </div>
    </div>
  );
};

export default Layout;
