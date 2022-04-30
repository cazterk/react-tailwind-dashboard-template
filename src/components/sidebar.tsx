import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="w-40 bg-red-200">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="" alt="logo" />
        </div>
        <div className="side-menu">
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
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
