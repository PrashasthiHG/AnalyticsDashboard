import React from "react";
import { FaHome, FaCog } from "react-icons/fa";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-item">
        <FaHome />
      </div>
      <div className="menu-item">
        <FaCog />
      </div>
    </div>
  );
};

export default Sidebar;
