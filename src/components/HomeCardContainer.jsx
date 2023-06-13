import React from "react";
import ImageDescCard from "./ImageDescCard";
import "./HomeCardContainer.css";

const HomeCardContainer = ({ data }) => {
  return (
    <div className="CardContainerWrapper">
      <div className="CardContainerTitle">
        Our Promise For A New Kind Of Caring
      </div>
      <hr className="MainHR" />
      <ul className="Cards">
        {data.map((item, itemIndex) => (
          <li className="Card">
            <ImageDescCard key={itemIndex} data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCardContainer;
