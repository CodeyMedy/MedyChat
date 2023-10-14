import Bar from "./Bar/Bar"
import Conversation from "./Conversation/Conversation"
import { useState } from "react"
import mockData from "./mockData"
export default function RealPage() {
    const [contacts, setContacts] = useState([
        {
            contactID: "1",
            name: "Amine Boukour",
            lastMessage: "Hi", 
            lastMessageSent: "22:40",
            unreadMessage:"2",
        },
        {
            contactID: "2",
            name: "Alae Koutate",
            lastMessage: "Hi", 
            lastMessageSent: "22:40",
            unreadMessage:"5",
        },
        {
            contactID: "3",
            name: "Youssef Bouhajbane",
            lastMessage: "Hi", 
            lastMessageSent: "22:40",
            unreadMessage:"5",
        },
    ])

    const [choosenContact, setChoosenContact] = useState("")

    const [convData, setConvData] = useState(mockData)
    
    function setConvMessages(contactID, newMessage) {
        console.log(contactID)
        console.log(newMessage)
        setConvData(prevData => {
            return prevData.map(contactData => {
                if (contactData.contactID === contactID) {
                    return {
                        ...contactData,
                        conv: [
                            ...contactData.conv,
                            newMessage 
                        ]
                    };
                }
                return contactData;
            });
        });
    }
    
    
    function getConvContent(convID) {
        for(let i = 0; i < convData.length; i++) {
            if (convID==convData[i].contactID)
                return (convData[i].conv)
        }
    }

    function getName(convID) {
        for(let i = 0; i < contacts.length; i++) {
            if (convID==contacts[i].contactID)
                return (contacts[i].name)
        }
    }

    return(
        <div className='main'>
            <Bar 
            contacts={contacts} 
            setContacts={setContacts} 
            choosenContact={choosenContact} 
            setChoosenContact={setChoosenContact}
            />
        {choosenContact != "" && (
            <Conversation 
                convID={choosenContact}
                name={getName(choosenContact)}
                convMessages={getConvContent(choosenContact)} 
                setConvMessages={setConvMessages}
            />
        )}
        </div>
    );
}