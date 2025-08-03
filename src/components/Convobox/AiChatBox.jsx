import "./AiChatBox.css";
import AiResponse from "./AiResponse";
import UserResponse from "./UserResponse";

export default function AiChatBox({ prevChat, model = "ChatGPT 1.0 MINI" }) {
    let response = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt at saepe dolore tempore! Consequuntur quam molestias ipsa temporibus officiis, eos eligendi consequatur. Distinctio cum corporis repudiandae ea, nobis aliquid? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt at saepe dolore tempore! Consequuntur quam molestias ipsa temporibus officiis, eos eligendi consequatur. Distinctio cum corporis repudiandae ea, nobis aliquid?";
    let prompt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos ipsam fugit consequatur sapiente iste nemo quibusdam doloremque, pariatur tempore expedita, suscipit ipsa beatae molestiae assumenda aperiam praesentium cumque esse!";
  return (
    <div className="ai-chat">
        <AiResponse response={response} model={model}></AiResponse>
        <UserResponse prompt={prompt}></UserResponse>
    </div> 
  );
}
