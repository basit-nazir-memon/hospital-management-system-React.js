import "./Chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = {
    title: "Last 12 Months (Patient Visited)",
    chartFeilds: [
      {
        month: "Jan",
        patients: 1500,
      },
      {
        month: "Feb",
        patients: 3000,
      },
      {
        month: "Mar",
        patients: 5000,
      },
      {
        month: "Apr",
        patients: 1000,
      },
      {
        month: "May",
        patients: 4500,
      },
      {
        month: "Jun",
        patients: 2500,
      },
      {
        month: "Jul",
        patients: 200,
      },
      {
        month: "Aug",
        patients: 6000,
      },
      {
        month: "Sep",
        patients: 4000,
      },
      {
        month: "Oct",
        patients: 2000,
      },
      {
        month: "Nov",
        patients: 5000,
      },
      {
        month: "Dec",
        patients: 1000,
      },
    ],
  };
  return (
    <div className="chart">
      <div className="chartTitle">{data.title}</div>
      <ResponsiveContainer width="99%" height="94%">
        <AreaChart
          width={0}
          height={250}
          data={data.chartFeilds}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="patients"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
