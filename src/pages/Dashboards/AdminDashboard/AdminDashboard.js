import Table from "../../../components/table/Table";
import Chart from "../../../components/dashboard/Chart/AreaChart/Chart";
import Featured from "../../../components/dashboard/featured/Featured";
import Widget from "../../../components/dashboard/widget/Widget";
import { PersonOutlined, BookOutlined } from "@mui/icons-material";

const widgetData = [
  {
    title: "Patients",
    Figure: 315,
    percentage: -20,
    seeAllTitle: "See all patients",
    seeAllLink: "/",
    buttonIcon: PersonOutlined,
    buttonLink: "/",
    theme: {
      back: "purple",
      color: "white",
    },
  },
  {
    title: "Doctors",
    Figure: 57,
    percentage: 17,
    seeAllTitle: "See all doctors",
    seeAllLink: "/",
    buttonIcon: PersonOutlined,
    buttonLink: "/",
    theme: {
      back: "royalblue",
      color: "white",
    },
  },
  {
    title: "Profit",
    Figure: 3150000,
    percentage: -29,
    seeAllTitle: "See records",
    seeAllLink: "/",
    buttonIcon: BookOutlined,
    buttonLink: "/",
    theme: {
      back: "tomato",
      color: "white",
    },
  },
  {
    title: "Staff",
    Figure: 4120,
    percentage: 5,
    seeAllTitle: "See staff",
    seeAllLink: "/",
    buttonIcon: PersonOutlined,
    buttonLink: "/",
    theme: {
      back: "chocolate",
      color: "white",
    },
  },
];

function AdminDashboard() {
  return (
    <>
      <div className="topwidgets">
        <div className="widgets">
          <Widget data={widgetData[0]} />
          <Widget data={widgetData[1]} />
        </div>
        <div className="widgets">
          <Widget data={widgetData[2]} />
          <Widget data={widgetData[3]} />
        </div>
      </div>
      <div className="charts">
        <Featured />
        <Chart />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </>
  );
}

export default AdminDashboard;
