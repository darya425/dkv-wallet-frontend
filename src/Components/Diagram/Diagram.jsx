import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "./Diagram.module.scss";

const Diagram = () => {
  const chartContainer = useRef();

  const expenses = [8700, 2000, 1500, 800, 2208, 300, 3400, 1230, 610];
  const labels = [
    "Основные расходы",
    "Продукты",
    "Машина",
    "Забота о себе",
    "Забота о детях",
    "Товары для дома",
    "Образование",
    "Досуг",
    "Другие расходы"
  ];

  const colors = [
    "rgba(254, 208, 87, 1)",
    "rgba(255, 216, 208, 1)",
    "rgba(253, 148, 152, 1)",
    "rgba(197, 186, 255, 1)",
    "rgba(110, 120, 232, 1)",
    "rgba(74, 86, 226, 1)",
    "rgba(129, 225, 255, 1)",
    "rgba(36, 204, 167, 1)",
    "rgba(0, 173, 132, 1)"
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: expenses,
        backgroundColor: colors,

        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  };
  const options = {
    layout: {
      padding: -50
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const config = {
    type: "doughnut",
    data: data,
    options: options
  };

  useEffect(() => {
    const newChartInstance = new Chart(chartContainer.current, config);
    return () => {
      newChartInstance.destroy();
    };
  }, []);

  return (
    <div className={styles.chartContainer}>
      <p className={styles.statisticsTitle}>Statistics</p>
      <canvas ref={chartContainer} className="canvas" />
      <p className={styles.chartInside}> € 99999999 </p>
    </div>
  );
};

export default Diagram;
