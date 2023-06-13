import React from "react";
import Notification from "../../../components/Notification";
import Pic from "../../../images/pic.jpg";
import "./Notifications.css";
const Notifications = () => {
  const notifications = [
    {
      pic: Pic,
      name: "Atif Nazir",
      title: "Corona Cases are Decreasing",
      description:
        "Number of Corona Cases are falling down due to huge amount of vaccination available",
      date: new Date(1232156115651),
    },
    {
      pic: Pic,
      name: "Atif Nazir",
      title: "New Machines are now avaible",
      description:
        "After the agreement signed by the foreign company, our hospital has aquired latest macines for the treatment of various diseases.",
      date: new Date(),
    },
    {
      pic: Pic,
      name: "Atif Nazir",
      title: "Drastic Increase in Revenue",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur at maiores cupiditate velit exercitationem dicta placeat eaque, quisquam libero, commodi soluta quis eos tenetur, laborum nostrum. Magni quam enim doloremque.",
      date: new Date(),
    },
    {
      pic: Pic,
      name: "Atif Nazir",
      title: "Doctors Position are Vacant",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quae voluptatem harum, ipsum inventore, cupiditate neque quo vitae quis ratione hic atque ab voluptates. Itaque natus laborum doloribus fugit eligendi eaque illum, enim aperiam nam ipsa cum ratione officiis. Magnam earum sequi eveniet vero, illum reiciendis quis veniam molestias? Eligendi?",
      date: new Date(),
    },
    {
      pic: Pic,
      name: "Atif Nazir",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta eius ipsam vero esse vel quas! Dicta illum facilis recusandae adipisci, repudiandae voluptatem eligendi et atque voluptate, labore harum sapiente.",
      date: new Date(),
    },
  ];
  return (
    <div className="notificationWrapper">
      <div className="title">Notifications</div>
      <ul className="notifications">
        {notifications.map((data) => (
          <Notification data={data} />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
