import { React, useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    // console.log(dailyData)
    fetchApi();
  }, []);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Confirmed",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 249, 0.3)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(249, 0, 0, 0.3)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barchart = confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: [
              "rgba(0, 0, 255, 0.6)",
              "rgba(42, 219, 66, 0.6)",
              "rgba(219, 43, 43, 0.6)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barchart : LineChart}</div>
  );
};

export default Chart;
