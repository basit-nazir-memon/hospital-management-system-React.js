import "./Widget.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Widget = ({ data }) => {
  return (
    <div className="widget">
      <div className="widgetLeft">
        <span className="widgetTitle">{data.title}</span>
        <span className="widgetCounter">{data.Figure}</span>
        <Link to={data.seeAllLink}>
          <span className="widgetLink">{data.seeAllTitle}</span>
        </Link>
      </div>
      <div className="widgetRight">
        <div
          className={
            data.percentage > 0
              ? "widgetPercentage positive"
              : "widgetPercentage negative"
          }
        >
          {data.percentage > 0 ? (
            <KeyboardArrowUp style={{ fill: "green" }} />
          ) : (
            <KeyboardArrowDown style={{ fill: "red" }} />
          )}
          {(data.percentage > 0
            ? data.percentage
            : (data.percentage *= -1)
          ).toString() + "%"}
        </div>
        <Link to={data.buttonLink} className={"setWidgetButton"}>
          {
            <data.buttonIcon
              className="widgetIcon"
              style={{
                backgroundColor: data.theme.back,
                fill: data.theme.color,
              }}
            />
          }
        </Link>
      </div>
    </div>
  );
};

export default Widget;
