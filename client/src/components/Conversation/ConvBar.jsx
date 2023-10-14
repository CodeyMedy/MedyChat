import userHolder from "../../assets/imgs/user-holder.png"

export default function ConvBar({name}) {
    return(
        <div className="conv-bar">
            <div className="convbar-info">
                <img className="profile-pic conv-profile" src={userHolder} />
                <h4 className="name">{name}</h4>
            </div>
        </div>
    )
}