export default function Teamspaceoptions({icon,info,toggle}){
    return (
        <div className="teamspace-option" id={info} onClick={toggle}>
            <i className={icon}></i>
            <span>{info}</span>
        </div>
    )
}