import React from 'react';
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
    const options = {
        chart: {
          type: "line"
        },
        title: {
          text: "Chart-1"
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                  month: '%e %b. %Y',
               },
            title: {
                text: 'Date'
            }

        },

        plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
        },

        tooltip: {
            animation: true,
            backgroundColor: '#addfee',
        },

        legend: {
            enabled: false
        },


        series: [
          {
            name: 'Tokyo',
            // data: [, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            data: [
                [Date.UTC(2020, 0, 1), 7.0],
                [Date.UTC(2020, 1, 1), 6.9],
                [Date.UTC(2020, 2, 1), 9.5],
                [Date.UTC(2020, 3, 1), 14.5],
                [Date.UTC(2020, 4, 1), 18.4],
                [Date.UTC(2020, 5, 1), 21.5],
                [Date.UTC(2020, 6, 1), 25.2],
                [Date.UTC(2020, 7, 1), 26.5],
                [Date.UTC(2020, 8, 1), 23.3],
                [Date.UTC(2020, 9, 1), 18.3],
                [Date.UTC(2020, 10, 1), 13.9],
                [Date.UTC(2020, 11, 1), 9.6],
             ]
          },

          {
            name: 'London',
            // data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
            data: [
                [Date.UTC(2020,  0, 1), 3.9  ],
                [Date.UTC(2020, 1, 1), 4.2],
                [Date.UTC(2020, 2, 1), 5.7],
                [Date.UTC(2020, 3,  1), 8.5],
                [Date.UTC(2020, 4,  1), 11.9],
                [Date.UTC(2020, 5, 1), 15.2],
                [Date.UTC(2020, 6, 1), 17.0],
                [Date.UTC(2020,  7,  1), 16.6],
                [Date.UTC(2020,  8,  1), 14.2],
                [Date.UTC(2020,  9, 1), 10.3],
                [Date.UTC(2020, 10, 1), 6.6],
                [Date.UTC(2020,  11, 1), 4.8],
             ]
          },

        ]
      };


    return (
        <div style={{margin: '50px 0', }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Charts
