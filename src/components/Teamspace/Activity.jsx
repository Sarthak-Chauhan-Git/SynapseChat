import "./Activity.css"

export default function Activity({activityFeed}) {

  return (
    <div className="Activity-feed">
      {activityFeed.map((activity, index) => (
        <div className="activity-event" key={index}>
          <span className="activity-time">{activity.time}</span>
          <span className="activity-message">{activity.message}</span>
        </div>
      ))}
    </div>
  );
}
