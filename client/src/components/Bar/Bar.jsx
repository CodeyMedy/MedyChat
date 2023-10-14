import { useState } from "react";
import Contact from "./Contact";
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

export default function Bar({contacts, setContacts, choosenContact, setChoosenContact}) {




    const handleClick = (choice) => {
        setChoosenContact(choice);
    }
    const renderContacts = () => {
        return(contacts.map((contact) => 
        <Contact 
        key={contact.contactID}
        contactID={contact.contactID}
        name={contact.name} 
        lastMessage={contact.lastMessage} 
        lastMessageSent={contact.lastMessageSent}
        unreadMessage={contact.unreadMessage}
        choosenContact={choosenContact}
        handleClick={handleClick}
        />)
        )
    }


    return(
        <div className="rooms">
            {renderContacts()}
        </div>
    )
}