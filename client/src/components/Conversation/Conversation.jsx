import ConvBar from "./ConvBar"
import ConvBody from "./ConvBody"
import { useState } from "react";

export default function Conversation({convID, name, convMessages, setConvMessages}) {

    return (
    <div className="conversation">
        <ConvBar name={name}/>
        <ConvBody convID={convID} 
        convMessages={convMessages}
        setConvMessages={setConvMessages}
        />
    </div>
    )
}