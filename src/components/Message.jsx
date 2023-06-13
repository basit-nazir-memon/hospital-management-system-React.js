import React from "react";
import "./Message.css";

const Message = ({ user }) => {
  return (
    <div className="message">
      <div className="messageLeft">
        <img src={user.profile} alt="" className="MessagePic" />
      </div>
      <div className="messageCenter">
        <div className="MessageSender">{user.name}</div>
        <div className="MessageContent">{user.message}</div>
      </div>
      <div className="messageRight">
        <div className="MessageTime">{user.date.toLocaleDateString()}</div>
        <div
          className={user.newMessages > 0 ? "newMessages" : "hideNewMessages"}
        >
          {user.newMessages}
        </div>
      </div>
    </div>
  );
};

export default Message;
