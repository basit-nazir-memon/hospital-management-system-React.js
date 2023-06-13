import React from "react";
import "./News.css";
import NewsItem from "./NewsItem";

const News = ({ News }) => {
  return (
    <div className="NewsContainer">
      <div className="NewsContainerHeader">Our News</div>
      <hr className="NewsLine" />
      <div className="NewsItemsContainer">
        <div className="NewsItemsLeftContainer">
          <NewsItem newsData={News[0]} />
        </div>
        <div className="NewsItemsRightContainer">
          <div className="NewsItemsTopRightContainer">
            <div className="NewsItems">
              <NewsItem newsData={News[1]} />
            </div>
            <div className="NewsItems">
              <NewsItem newsData={News[2]} />
            </div>
          </div>
          <div className="NewsItemsBottomRightContainer">
            <div className="NewsItems">
              <NewsItem newsData={News[3]} />
            </div>
            <div className="NewsItems">
              <NewsItem newsData={News[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
