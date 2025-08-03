import "./Navbar.css";
import Logo from "./Logo";
import Links from "./Links";
import User from "./User";
import { useState } from "react";

export default function Navbar({ username, role }) {
  const [isCollapsed, setCollapsed] = useState(false);
  const handleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <div id="navbar" className={isCollapsed ? "collapsed" : "expanded"}>
        <a href="#" className="logo">
          {!isCollapsed && <Logo></Logo>}
          <button onClick={handleSidebar} className="sidebar-toggle">
            <i className={"fa-solid fa-angle-left"}></i>
          </button>
        </a>
        <ul className="flex">
          <Links
            icon="fa-solid fa-chart-line"
            info={isCollapsed ? "" : "Dashboard"}
          />
          <Links
            icon="fa-solid fa-diagram-project"
            info={isCollapsed ? "" : "Projects"}
          />
          <Links
            icon="fa-solid fa-people-group"
            info={isCollapsed ? "" : "Teams"}
          />
        </ul>
        <div className="login">
          {!isCollapsed && (
            <div className="user">
              <span className="user-name">{username}</span>
              <span className="user-role">{role}</span>
            </div>
          )}
          <User username={username}></User>
        </div>
      </div>
    </>
  );
}
