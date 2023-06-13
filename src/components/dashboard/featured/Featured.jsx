import "./Featured.css";
import {
  KeyboardArrowUp,
  MoreVert,
  TagFacesTwoTone,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  KeyboardArrowDown,
  Close,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = {
  pageTitle: "Total Billed",
  options: [
    { name: "View Details", link: "/" },
    { name: "Settings", link: "/" },
    { name: "View Details", link: "/" },
    { name: "View Details", link: "/" },
  ],
  value: 55,
  heading: "Total Bills made Today",
  amount: 420,
  description:
    "Previous transaction processing. Last payments may not be included",
  targets: [
    { title: "Pharmacy", amount: 12500 },
    { title: "Laboratory", amount: -3128 },
    { title: "Salary", amount: -5439 },
  ],
};

const Featured = () => {
  const [showMenu, setShowMenu] = useState(false);

  const changeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="featured">
      <div className="featuredTop">
        <h1 className="featuredTitle">{data.pageTitle}</h1>
        {!showMenu ? (
          <MoreVert className="featuredMenuIcon" onClick={changeMenu} />
        ) : (
          <Close className="featuredMenuIcon" onClick={changeMenu} />
        )}
        {showMenu ? (
          <>
            <div className="showOptions">
              {data.options.map((option) => (
                <div className="option">
                  <Link to={option.link} className="option">
                    {option.name}
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="featuredBottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={data.value}
            text={data.value.toString() + "%"}
          />
        </div>
        <p className="featuredChartTitle">{data.heading}</p>
        <p className="featuredChartAmount">{"$" + data.amount.toString()}</p>
        <p className="featuredChartDesc">{data.description}</p>
        <div className="featuredSummary">
          {data.targets.map((target) => (
            <div className="featuredItem">
              <div className="featuredItemTitle">{target.title}</div>
              {target.amount > 0 ? (
                <div className="featuredItemResult positive">
                  <KeyboardArrowUp fontSize="small" style={{ fill: "green" }} />
                  <div className="featuredItemResultAmount positive">
                    {"$" + target.amount.toString()}
                  </div>
                </div>
              ) : (
                <div className="featuredItemResult negative">
                  <KeyboardArrowDown fontSize="small" style={{ fill: "red" }} />
                  <div className="featuredItemResultAmount negative">
                    {" "}
                    {"$" + (target.amount * -1).toString()}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
