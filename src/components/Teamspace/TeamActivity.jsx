import Doc from "./Doc";
import Progress from "./Progress";
import Activity from "./Activity";

export default function TeamActivity() {
  const documents = [
    {
      title: "Meeting_Notes.docx",
      description: "Key points from the client call on Q3 roadmap",
      createdBy: { user: "Ishita", role: "Project Lead" },
      timestamp: "09:30 AM",
      fileSize: "1.2MB",
    },
    {
      title: "UI_Mockups.pdf",
      description: "Latest Figma mockups for review before sprint planning.",
      createdBy: { user: "Kunal", role: "UI/UX Designer" },
      timestamp: "11:47 AM",
      fileSize: "3.8MB",
    },
    {
      title: "API_Docs_v2.pdf",
      description: "Endpoints and integration flow for backend services.",
      createdBy: { user: "Aayush", role: "Backend Dev" },
      timestamp: "02:10 PM",
      fileSize: "4.5MB",
    },
    {
      title: "Bug_Report.xlsx",
      description: "Compiled list of issues from QA testing round 2.",
      createdBy: { user: "Sneha", role: "QA Engineer" },
      timestamp: "04:55 PM",
      fileSize: "915KB",
    },
    {
      title: "Marketing_Plan_2025.docx",
      description: "Draft strategy for product launch and ad campaigns.",
      createdBy: { user: "Raghav", role: "Marketing Manager" },
      timestamp: "06:03 PM",
      fileSize: "2.6MB",
    },
    {
      title: "Team_Roster.xlsx",
      description: "Updated team roles and weekly responsibilities.",
      createdBy: { user: "Tanvi", role: "HR Coordinator" },
      timestamp: "07:40 PM",
      fileSize: "1.1MB",
    },
    {
      title: "Research_Outline.pdf",
      description: "Initial draft for AI-based crop monitoring study.",
      createdBy: { user: "Sarthak", role: "AI Researcher" },
      timestamp: "08:15 PM",
      fileSize: "5.9MB",
    },
  ];

  const timeline = [
    { date: "01 Aug", title: "Requirement Gathering", status: "done" },
    { date: "03 Aug", title: "Design Phase", status: "done" },
    { date: "05 Aug", title: "Development Started", status: "ongoing" },
    { date: "10 Aug", title: "Testing", status: "pending" },
  ];

  const activityFeed = [
  { time: "09:05 AM", message: "Raghav uploaded 'API_Docs_v2.pdf'" },
  { time: "10:22 AM", message: "Ishita updated the task 'Landing Page Design'" },
  { time: "11:40 AM", message: "Sarthak completed milestone 'ML Integration'" },
  { time: "01:15 PM", message: "Sneha commented on 'Bug_Report.xlsx'" },
  { time: "02:05 PM", message: "Deployment initiated by Aayush" },
];


  return (
    <div className="Activity">
      <span className="teamspace-subhead">
        Documents
        <button className="btn btn-dark">
          <i class="fa-solid fa-upload"></i>
        </button>
      </span>
      <div className="doc">
        <Doc document={documents[0]}></Doc>
        <Doc document={documents[1]}></Doc>
        <Doc document={documents[2]}></Doc>
        <Doc document={documents[3]}></Doc>
      </div>

      <span className="teamspace-subhead">
        Project Progress
        <button className="btn btn-dark">
          <i class="fa-solid fa-bars-progress"></i>
        </button>
      </span>
      <div className="Progress"></div>
        <Progress timeline={timeline}></Progress>
      <div className="teamspace-subhead">
        Activity Feed
        <button className="btn btn-dark">
          <i class="fa-solid fa-chart-line"></i>
        </button>
      </div>
      <div className="Activity-feed">
        <Activity activityFeed={activityFeed}></Activity>
      </div>
    </div>
  );
}
