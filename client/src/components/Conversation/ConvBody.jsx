import { useState } from "react"
import Message from "./mini/Message"
import { SendForm, Messages } from "./mini/Content";


export default function ConvBody({convID, convMessages, setConvMessages}) {
    
    const [currentMessage, setCurrentMessage] = useState("");

    const saveMessage = (event) => {
        const {value} = event.target;
        setCurrentMessage(value)
    }


    const sendMessage = () => {
        if (currentMessage !== "") {
            let newIDNumber;
            if (convMessages.length !== 0) {
                const lastMessageID = convMessages[convMessages.length - 1].messageID;
                const lastIDNumber = parseInt(lastMessageID.split('-')[1], 10);
                newIDNumber = lastIDNumber + 1;
            } else {
                newIDNumber = 1;
            }
            const newMessageID = `${convID}-${newIDNumber}`;
            const newMessage = {
                messageID: newMessageID,
                content: currentMessage,
                isOwner: true,
            };
    
            // Correctly call setConvMessages with both contactID and newMessage
            setConvMessages(convID, newMessage);
            setCurrentMessage("");
        }
    };
    
    

    return (
        <div className="conv-body">
            <SendForm currentMessage={currentMessage} saveMessage={saveMessage} sendMessage={sendMessage} />
            <Messages convMessages={convMessages} />
        </div>
      );
    }