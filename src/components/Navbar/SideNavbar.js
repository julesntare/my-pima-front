import React, { useState } from "react";
import {
  MdOutlineDashboardCustomize,
  MdOutlineGroups,
  MdOutlineCalendarToday,
  MdOutlinePersonSearch,
  MdLogout,
} from "react-icons/md";
import { HiOutlineTruck, HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo";

/* Component */
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      path: "/trainsession",
      name: "Training Session",
      icon: <MdOutlineGroups />,
    },
    {
      path: "/traingroup",
      name: "Training Group",
      icon: <MdOutlineCalendarToday />,
    },
    {
      path: "/participant",
      name: "Participants",
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/farmvisit",
      name: "Farm Visit",
      icon: <HiOutlineTruck />,
    },
  ];
  const bottomitem = [
    {
      path: "/profile",
      name: "Michael Smith",
      email: "michaelsmith@email.com",
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <MdLogout />,
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();

    window.localStorage.removeItem("my-pima-token");
    window.localStorage.removeItem("myPimaUserData");
    window.location.href = "/login";
  };

  return (
    <div className="nav__container">
      <div
        style={{
          width: isOpen ? "auto" : "60px",
          alignItems: isOpen ? "unset" : "center",
        }}
        className="sidebar"
      >
        <div className="top_section">
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            {" "}
            <Logo />{" "}
          </div>
          <div style={{ marginLeft: isOpen ? "70px" : "0px" }} className="bars">
            <HiMenuAlt2 onClick={toggle} />
          </div>
        </div>
        <div className="mid__section">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="bottom__section">
          <NavLink
            to={bottomitem[0].path}
            className="link"
            activeclassname="active"
          >
            <div>{bottomitem[0].icon}</div>
            <div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="profile__text"
              >
                {bottomitem[0].name}
              </div>{" "}
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="profile__text"
              >
                {bottomitem[0].email}
              </div>
            </div>
          </NavLink>
          <NavLink
            to={bottomitem[1].path}
            className="link"
            activeclassname="active"
            onClick={handleLogout}
          >
            <div className="icon">{bottomitem[1].icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="_text"
            >
              {bottomitem[1].name}
            </div>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
