import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="w-40 bg-red-200">
      <div className="navbar-container">
        <div className="navbar-logo p-4">
          <img src="" alt="logo" />
        </div>
        <div className="side-menu flex flex-col justify-center">
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className=" flex list-none w-full h-14 py-2 pr-0 pl-4 items-center "
              >
                <Link
                  to={item.path}
                  className="flex justify-start items-center "
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
