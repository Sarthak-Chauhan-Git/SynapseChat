import { useState } from "react";
import "./Chat.css";

export default function Chat({chathistory}) {
  const [messages, setMessages] = useState(chathistory);

  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (newMsg.trim() === "") return;
    const newMessage = {
      user: "You",
      text: newMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setNewMsg("");
  };

  return (
    <div className="Chat">
      <div className="chat-header">Team Chat</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div className="chat-msg" key={index}>
            <span className="chat-user">{msg.user}</span>
            <span className="chat-text">{msg.text}</span>
            <span className="chat-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <button className="chat-attachment-btn"><i className="fa-solid fa-paperclip"></i></button>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}><i className="fa-solid fa-paper-plane"></i></button>
      </div>
      <div className="chat-privacy">
        <span>Privacy policy</span>
        <hr />
        <span>Terms and services</span>
      </div>
    </div>
  );
}
