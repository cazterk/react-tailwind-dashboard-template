import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";

const Sidebar = () => {
  return (
    <div className="w-48 bg-white">
      <div className="navbar-container">
        <div className="navbar-logo my-2 p-2 w-16">
          <img src="rt-logo.svg" alt="logo" />
        </div>
        <div className="side-menu flex flex-col justify-center">
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className=" flex list-none w-full h-14 py-2 pr-4 pl-4 justify-start items-center "
              >
                {" "}
                <IconContext.Provider value={{ size: "30" }}>
                  <Link
                    to={item.path}
                    className="flex items-center text-base text-black font-semibold h-full rounded hover:bg-gray-100 hover:w-full p-4"
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
