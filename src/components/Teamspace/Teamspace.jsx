import { useState } from "react";
import TeamMembers from "./TeamMembers";
import "./Teamspace.css";
import Teamspaceoptions from "./Teamspaceoptions";
import TeamActivity from "./TeamActivity";
import Chat from "./Chat";
import User from "../Navbar/User";

export default function Teamspace({ username }) {
  let [teamToggle, setTeamToggle] = useState(0);
  let handleTeamToggle = (index) => {
    setTeamToggle(index);
    console.log(index);
  };

  let online = [
    { name: "Raghav", role: "Engineer" },
    { name: "Bhavishya", role: "Finance" },
    { name: "Aradhya", role: "Marketing" },
    { name: "Raghav", role: "Engineer" },
    { name: "Bhavishya", role: "Finance" },
    { name: "Aradhya", role: "Marketing" },
    { name: "Raghav", role: "Engineer" },
    { name: "Bhavishya", role: "Finance" },
    { name: "Aradhya", role: "Marketing" },
  ];
  let team = [
    { name: "Raghav", role: "Engineer" },
    { name: "Bhavishya", role: "Finance" },
    { name: "Aradhya", role: "Marketing" },
    { name: "Ayush", role: "Marketing" },
    { name: "Priyanshu", role: "SEO" },
    { name: "Raghav", role: "Engineer" },
    { name: "Bhavishya", role: "Finance" },
    { name: "Aradhya", role: "Marketing" },
    { name: "Ayush", role: "Marketing" },
    { name: "Priyanshu", role: "SEO" },
    { name: "Raghav", role: "Engineer" },
    { name: "Bhavishya", role: "Finance" },
    { name: "Aradhya", role: "Marketing" },
    { name: "Ayush", role: "Marketing" },
    { name: "Priyanshu", role: "SEO" },
  ];

  let chathistory = [
    { user: "Raghav", text: "Hey team, the API is ready 🚀", time: "09:12 AM" },
    {
      user: "Ishita",
      text: "Great! I’ll connect it to the UI now.",
      time: "09:14 AM",
    },
    { user: "Sarthak", text: "Ping me if any bugs pop up.", time: "09:16 AM" },
  ];

  let [isCollapsed, setIsCollapsed] = useState(false);

  let toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={isCollapsed ? "expand" : "collapsed"}>
        <button className="expand-btn" onClick={toggleSidebar}>
          <i className={"fa-solid fa-angle-left"}></i>
        </button>
        <div className="online online-scroll scrollable collapsed-online-scroll">
          {online.map((user, index) => (
            <div className="online-user-info" key={index}>
              <User username={user.name}></User>
              <span className="online-icon">
                <i className="fa-solid fa-circle"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={isCollapsed ? "collapsed" : "teamspace"}>
        <div className="teamspace-head">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <div className="teamspace-head-info">
            <i className="fa-solid fa-people-roof"></i>
            <span>Team Space</span>
          </div>
        </div>
        <div className="teamspace-menu">
          <Teamspaceoptions
            toggle={() => handleTeamToggle(0)}
            icon={"fa-solid fa-people-group"}
            info={"Teams"}
          ></Teamspaceoptions>
          <Teamspaceoptions
            toggle={() => handleTeamToggle(1)}
            icon={"fa-solid fa-chart-line"}
            info={"Activity"}
          ></Teamspaceoptions>
          <Teamspaceoptions
            toggle={() => handleTeamToggle(2)}
            icon={"fa-solid fa-message"}
            info={"Connect"}
          ></Teamspaceoptions>
        </div>
        {teamToggle === 0 && (
          <TeamMembers online={online} team={team}></TeamMembers>
        )}
        {teamToggle === 1 && <TeamActivity></TeamActivity>}
        {teamToggle === 2 && <Chat chathistory={chathistory}></Chat>}
      </div>
    </>
  );
}
