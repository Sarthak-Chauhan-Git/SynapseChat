import User from "../Navbar/User";

export default function TeamMembers({ online = [{}], team = [{}] }) {
  return (
    <>
      <span className="teamspace-subhead">Online</span>
      <div className="online online-scroll scrollable">
        {online.map((user, index) => (
          <div className="online-user-info" key={index}>
            <User username={user.name}></User>
            <span className="online-icon">
              <i className="fa-solid fa-circle"></i>
            </span>
            <span className="teamspace-member" key={index}>
              {user.name}
              <span className="role">{user.role}</span>
            </span>
          </div>
        ))}
      </div>

      <span className="teamspace-subhead">All Members</span>
      <div className="team scrollable">
        {team.map((user, index) => (
          <div className="online-user-info">
            <User username={user.name}></User>
            <span className="teamspace-member" key={index}>
              {user.name}
              <span className="role">{user.role}</span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
