import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-auto bg-gray-100 p-10">{children}</main>
      </div>
    </>
  );
};

export default Layout;
