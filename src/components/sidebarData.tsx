import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUserAlt />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdPermContactCalendar />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoIosSettings />,
  },
];
