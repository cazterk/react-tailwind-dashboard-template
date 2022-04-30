import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-auto bg-green-200 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
