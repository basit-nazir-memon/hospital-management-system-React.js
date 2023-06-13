import React from "react";
import "./ImageDescCard.css";
import { Link } from "react-router-dom";
const ImageDescCard = ({ data }) => {
  return (
    <div className="CardWrapper">
      <div className="CardImageContainer">
        <img src={data.url} alt="NoImage" className="CardImage" />
      </div>
      <div className="CardTitle">{data.title}</div>
      <div className="CardButtonContainer">
        <Link to={data.btnlink} className="CardButtonContainer">
          <button className="CardButton">More</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageDescCard;
