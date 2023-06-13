import React from "react";
import Message from "../../../components/Message";
import Pic from "../../../images/pic.jpg";
import "./Messages.css";

const Messages = () => {
  const messages = [
    {
      id: 1,
      profile: Pic,
      name: "Atif Nazir",
      message: "Thanks alot!",
      date: new Date(),
      newMessages: 6,
    },
    {
      id: 2,
      profile:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Ahmed",
      message: "Hello",
      date: new Date(),
      newMessages: 1,
    },
    {
      id: 3,
      profile:
        "https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Kamran Ali",
      message: "How are you?",
      date: new Date(),
      newMessages: 2,
    },
    {
      id: 4,
      profile:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Junaid Khalid",
      message: "How is the weather there?",
      date: new Date(),
      newMessages: 1,
    },
  ];

  return (
    <div className="MessagesWrapper">
      <div className="title">Messages</div>
      <div className="Messages">
        {messages.map((user) => (
          <Message key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
