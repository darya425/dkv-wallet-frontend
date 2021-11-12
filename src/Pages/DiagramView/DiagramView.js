import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js/auto";

export default function DiagramView() {
  const [chartInstance, setChartInstance] = useState(null);
 const chartContainer = useRef(null);

 const data = {
   labels: [
     'Основные расходы',
     'Продукты',
     'Машина',
     'Забота о себе',
     'Забота о детях',
     'Товары для дома',
     'Образование',
     'Досуг',
     'Другие расходы'

   ],
   datasets: [{
     label: 'Статистика',
     data: [8700, 3800, 1500, 800, 2208, 300, 3400, 1230, 610],
     backgroundColor: [
       'rgba(254, 208, 87, 1)',
       'rgba(255, 216, 208, 1)',
       'rgba(253, 148, 152, 1)',
       'rgba(197, 186, 255, 1)',
       'rgba(110, 120, 232, 1)',
       'rgba(74, 86, 226, 1)',
       'rgba(129, 225, 255, 1)',
       'rgba(36, 204, 167, 1)',
       'rgba(0, 173, 132, 1)'
     ],
		 borderWidth: 0,
     hoverOffset: 4
   }]
 };

 const config = {
   type: 'doughnut',
   data: data,
 };
 
 useEffect(() => {
   if (chartContainer && chartContainer.current) {
     const newChartInstance = new Chartjs(chartContainer.current, config);
     setChartInstance(newChartInstance);
   }
 }, [chartContainer]);
 

 return (
   <div>
     <canvas ref={chartContainer}/>
   </div>
);
};
