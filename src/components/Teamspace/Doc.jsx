import "./Doc.css"

export default function Doc({document}){
    return(
        <div className="doc-metaData">
            <span className="doc-title">{document.title}</span>
            <span className="doc-description">{document.description}</span>
            <span className="doc-createdBy">By {document.createdBy.user}<br /><span className="role">{document.createdBy.role}</span></span>
            <span className="doc-info"><span className="doc-timestamp">{document.timestamp}</span><span className="doc-docSize">{document.fileSize}</span></span>
        </div>
    )   
}