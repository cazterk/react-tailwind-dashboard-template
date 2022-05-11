import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";

const Sidebar = () => {
  return (
    <div className="w-48 bg-red-200">
      <div className="navbar-container">
        <div className="navbar-logo p-4">
          <img src="" alt="logo" />
        </div>
        <div className="side-menu flex flex-col justify-center">
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className=" flex list-none w-full h-14 py-2 pr-4 pl-4 justify-start items-center "
              >
                {" "}
                <IconContext.Provider value={{ size: "25" }}>
                  <Link
                    to={item.path}
                    className="flex items-center text-lg text-gray-500 h-full rounded hover:bg-hover-bg hover:w-full"
                  >
                    {item.icon}
                    <span className=" w-full ml-4">{item.title}</span>
                  </Link>{" "}
                </IconContext.Provider>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
