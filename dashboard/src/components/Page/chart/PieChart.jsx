import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const PieChart = () => {
  const[pie,setPie]=useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/api/pie-chart')
            .then(res => setPie(res.data))
            .catch(err => console.log(err))
    }, []);
 
    console.log(pie);
const piename=pie.map(e=>({
  'name':e.label,
  'y':e.value
}))



console.log(piename);


  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: '',
    },
    series: [{
      name: '',
      data: piename,
    }],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

export default PieChart;
