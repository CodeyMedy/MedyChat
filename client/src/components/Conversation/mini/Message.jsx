import userHolder from "../../../assets/imgs/user-holder.png";
import { useState } from "react";


export default function Message({content ,isOwner }) {
    return (
        <div className={`message-wrapper ${isOwner ? "owner" : "receiver"}`}>

            <div className={`message ${isOwner ? "owner-msg" : "receiver-msg"}`}>
                <h4 className="message-content">{content}</h4>
            </div>
        </div>
    );
}
