export default function AiResponse({response, model}){
    return (
        <div className="ai-response">
            <span className="speaker">{model} said</span>
            <div className="ai-response-text text-14">{response}</div>
        </div>
    )
}