

import userHolder from "../../assets/imgs/user-holder.png";


export default function Contact({contactID,name,lastMessage,lastMessageSent,unreadMessage, choosenContact,handleClick}) {
    return(
        <div className={` ${contactID===choosenContact ? "contact-clicked" : "card"}`} onClick={() => { console.log('Card clicked', contactID); handleClick(contactID) }}>
            <img className="profile-pic" src={userHolder} />
            <div className="info">
                <div>
                    <h4 className="name">{name}</h4>
                    <h4 className="last-message">{lastMessage}</h4>
                </div>
                <div className="message-info">
                    <h4 className="last-message-sent">{lastMessageSent}</h4>
                    {<h4 className="unread-messages">{unreadMessage}</h4>}
                </div>
            </div>
        </div>
    )
}