export default function User({username}){
    let firstLetter = () => {
        let firstLetter = username[0];
        return firstLetter
    }
    return(
        <div className="flex loginoptions">
            <div className="profilePic">
                <span>{firstLetter()}</span>
            </div>
        </div>
    )
}