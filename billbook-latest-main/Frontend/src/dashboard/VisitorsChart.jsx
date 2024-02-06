import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './DashboardBackup.css';

const Visitorschart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug']
      }
    },
    series: [
      {
        name: "Loyal Customers",
        data: [30, 40, 45, 50, 49, 60, 70, 85]
      },
      {
        name: "New Customers",
        data: [10, 20, 35, 50, 45, 60, 80]
      },
      {
        name: "Unique Customers",
        data: [20, 40, 35, 50, 75, 30, 60,70]
      }
    ]
  });

  return (
    <>
      <div className='Visitorschart-parent'>
        <div className='col-md-12'>
          <div className='Visitorschart-chart'>
            <h4>Visitor Insights</h4>
            <Chart options={state.options} series={state.series} type='line' width='95%' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitorschart;
