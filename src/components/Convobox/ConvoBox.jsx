import "./ConvoBox.css";
import AiChatBox from "./AiChatBox";

export default function ConvoBox() {
  return (
    <div className="convobox">
      <div className="head">
        <h1>SynapseChat</h1>
      </div>

      <div className="ai-chatBox">
        <AiChatBox></AiChatBox>
      </div>

      <div className="ai-prompt-input">
        <form action="">
          <input type="text" placeholder="Ask AI" />
          <button className="btn prompt-btn">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
        <button className="btn prompt-btn">
          <i class="fa-solid fa-upload"></i>
        </button>
      </div>
    </div>
  );
}
