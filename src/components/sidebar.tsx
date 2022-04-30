import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-40 bg-red-200">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="" alt="logo" />
        </div>
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
