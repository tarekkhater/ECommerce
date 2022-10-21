import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import React from "react";
import styles from '../../styles/Dashboard/Graph.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { useSelector } from 'react-redux';
  
  

  export default function Graph({totalSalesMonths}) {
  const dark = useSelector(state => state.items.users)
  
 ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler, Legend);
const options = {
  responsive: true,
  plugins: {
    
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const data = {
  labels: ["January","February","March","April","May","June","July","August","September","October","November","December",
],
  datasets: [
      {
          label: "Sales/ month",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 0,
          pointRadius: 0,
          pointHitRadius: 0,
          data: [totalSalesMonths?.[0], totalSalesMonths?.[1], totalSalesMonths?.[2], totalSalesMonths?.[3], totalSalesMonths?.[4],
          totalSalesMonths?.[5], totalSalesMonths?.[6], totalSalesMonths?.[7], totalSalesMonths?.[8],
          totalSalesMonths?.[9],totalSalesMonths?.[10],totalSalesMonths?.[11]]
      },
  ],
};

//doughnut chart data set



  return (
    <div className={styles.container}>
      <div className={dark? styles.darks:styles.graph}>
					
					<Line data={data} option={options} className={styles.lines} />
				</div>
    </div>
  )
}

  
 
  
 