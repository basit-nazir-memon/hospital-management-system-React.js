import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import HomeCardContainer from "../components/HomeCardContainer";
import "./HomePage.css";
import News from "../components/News";
function HomePage() {
  const Slides = [
    {
      title: "1",
      url: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "2",
      url: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "3",
      url: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "4",
      url: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "5",
      url: "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "6",
      url: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];
  const CardData = [
    {
      url: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Complex Multispecialty Hospital",
      btnlink: "/",
    },
    {
      url: "https://www.ahdubai.com//uploads/contents/16546070351616583364innov.webp",
      title: "Research & Innovation Hub",
      btnlink: "/",
    },
    {
      url: "https://www.ahdubai.com//uploads/contents/1654607306488559robotic-bg.webp",
      title: "Robotic Centre Of Excellence",
      btnlink: "/",
    },
    {
      url: "https://media.istockphoto.com/photos/sityscape-of-beautiful-metropolitan-city-karachi-picture-id1211781372?b=1&k=20&m=1211781372&s=612x612&w=0&h=dVngshI-Aq2xb2o2GR8I3iVt7WZENQyNxnpHSNC-rqQ=",
      title: "Healthcare Destination",
      btnlink: "/",
    },
  ];
  const news = [
    {
      url: "https://media.istockphoto.com/photos/sityscape-of-beautiful-metropolitan-city-karachi-picture-id1211781372?b=1&k=20&m=1211781372&s=612x612&w=0&h=dVngshI-Aq2xb2o2GR8I3iVt7WZENQyNxnpHSNC-rqQ=",
      link: "/",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptates ipsum quidem incidunt velit ratione delectus! Earum exercitationem sunt quam.",
    },
    {
      url: "https://www.ahdubai.com//uploads/contents/1654607306488559robotic-bg.webp",
      link: "/",
      title: "News2",
    },
    {
      url: "https://www.ahdubai.com//uploads/contents/16546070351616583364innov.webp",
      link: "/",
      title: "News3",
    },
    {
      url: "https://media.istockphoto.com/photos/sityscape-of-beautiful-metropolitan-city-karachi-picture-id1211781372?b=1&k=20&m=1211781372&s=612x612&w=0&h=dVngshI-Aq2xb2o2GR8I3iVt7WZENQyNxnpHSNC-rqQ=",
      link: "/",
      title: "News4",
    },
    {
      url: "https://media.istockphoto.com/photos/sityscape-of-beautiful-metropolitan-city-karachi-picture-id1211781372?b=1&k=20&m=1211781372&s=612x612&w=0&h=dVngshI-Aq2xb2o2GR8I3iVt7WZENQyNxnpHSNC-rqQ=",
      link: "/",
      title: "News5",
    },
  ];
  return (
    <div>
      <Navbar />
      <Slider slides={Slides} />
      <HomeCardContainer data={CardData} />
      <div className="seperator">
        <div className="seperatorContent">
          <div className="seperatorContentTop">
            We Offer Medical Services for
          </div>
          <div className="seperatorContentBottom">International Patients</div>
        </div>
        <div className="seperatorButtonContainer">
          <button className="seperatorButton">Request an Appointment</button>
        </div>
      </div>
      <News News={news} />
      <Footer />
    </div>
  );
}

export default HomePage;
