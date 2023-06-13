import React from "react";
import { Link } from "react-router-dom";
import "./NewsItem.css";

const NewsItem = ({ newsData }) => {
  return (
    <div
      className="newsItem"
      style={{
        backgroundImage: `url(${newsData.url})`,
      }}
    >
      <div className="whiteShadow">
        <div className="NewsItemContent">
          <div className="NewsItemTitle">{newsData.title}</div>
          <hr className="NewsSeperator" />
        </div>
        <Link to={newsData.link} className="NewsButoncontainer">
          <button className="NewsButton">More</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
