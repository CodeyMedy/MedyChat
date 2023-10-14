import sendImg from "../../../assets/imgs/send.png"
import Message from "./Message";
// SendForm Component
export function SendForm({ currentMessage, saveMessage, sendMessage }) {
    return (
      <div className="send-form">
        <input
          type="text"
          className="message-input"
          placeholder="Enter your message here..."
          name="message-input"
          value={currentMessage}
          onChange={saveMessage}
        />
        <div className="send-img-container">
          <img className="send-img" src={sendImg} onClick={sendMessage} alt="Send"/>
        </div>
        
      </div>
    );
  }
  

export function Messages({ convMessages }) {
    const renderMessages = () => {
      return convMessages.map((message) => (
        <Message
          key={message.messageID}
          content={message.content}
          sentTime={message.sentTime}
          isOwner={message.isOwner}
        />
      ));
    };
  
    return <div className="messages-container">{renderMessages()}</div>;
  }
  