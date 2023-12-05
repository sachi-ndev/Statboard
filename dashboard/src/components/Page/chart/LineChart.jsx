import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const LineChart = () => {
  const[graph,setChart]=useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/api/graph')
            .then(res => setChart(res.data))
            .catch(err => console.log(err))
    }, []);
 
    console.log(graph);
const chartname=graph.map(e=>({
  'name':e.x,
  'y':e.y
}))



console.log(chartname);


  const chartOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: '',
    },
    series: [{
      name: 'Graph',
      data: chartname,
    }],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

export default LineChart;
