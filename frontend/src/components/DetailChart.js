import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Line } from 'react-chartjs-2';

import { lineOptions } from './chartOptions';
import { getHistoryData } from '../actions';
import { getTimeString } from '../helper';

const DetailChart = ( props ) => {
  const { id, item } = props;
  const dispatch = useDispatch();
  const historyData = useSelector( state => state.main.historyData);

  useEffect(() => {
    dispatch(getHistoryData(id));
  }, [ id ]);

  let lineLabels = [];
  let lineValues = [];

  for(let i=0; i<historyData.length; i++) {
    lineLabels.push(getTimeString(historyData[i].time));
    lineValues.push(parseFloat(historyData[i].priceUsd).toFixed(2));
  }

  const lineData = (canvas) => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(300, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 270, 0, 0);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: lineLabels,
      datasets: [
        {
          borderColor: 'red',
          pointBorderColor: 'red',
          pointBackgroundColor: 'red',
          pointHoverBorderColor: 'red',
          pointBorderWidth: 0.5,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          fill: true,
          backgroundColor: 'rgb(200, 0, 0, 0.2)',
          borderWidth: 3,
          tension: 0,
          data: lineValues,
        },
      ],
    };
  };

  return (
    <>
      <div className="chart2-container-rt">
        <Line data={lineData} options={lineOptions} />
      </div>
    </>
  );
}

export default DetailChart;