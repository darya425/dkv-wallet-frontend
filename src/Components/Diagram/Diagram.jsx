import { useEffect, useRef} from "react";
import Chart from "chart.js/auto";
import styles from "./Diagram.module.scss";

const Diagram = ({ colors, labels, expenses, expensesTotal }) => {
  const chartContainer = useRef();
  const data = {
    labels,
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
    }, 
    cutout: 100,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels, expenses]);

  return (
    <div className={styles.chartContainer}>
      <p className={styles.statisticsTitle}>Expense statistics</p>
      <canvas ref={chartContainer} className="canvas" />
      {expensesTotal? <p className={styles.chartInside}>€ {expensesTotal}</p>: <p className={styles.chartInside}>No expenses for this month</p>}
    </div>
  );
};

export default Diagram;
