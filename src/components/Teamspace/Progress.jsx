import "./Progress.css";

export default function Progress({ timeline }) {
  return (
    <div className="timeline-scroll">
      {timeline.map((item, index) => (
        <div className={`timeline-item ${item.status}`} key={index}>
          <span className="timeline-date">{item.date}</span>
          <span className="timeline-title">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
