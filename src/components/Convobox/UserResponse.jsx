export default function UserResponse({prompt}){
    return (
        <div className="user-response">
            <span className="speaker">You said</span>
            <div className="ai-response-text text-14">{prompt}</div>
        </div>
    )
}