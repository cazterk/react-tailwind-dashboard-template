import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="flex h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="flex-auto bg-gray-100 ">
          <div className="w-full h-20 fixed bg-gray-200">
            <Header />
          </div>
          <main className=" p-24">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
