import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Barchart() {

  return (
    <React.Fragment>
      <div  >      
        <Chart
          type="bar"
          width={980}
          height={300}
          series={[
             {
                name: 'User',
                data: [76, 85, 101, 98, 87]
              }, {
                name: 'Guest',
                data: [35, 41, 36, 26, 45],
                
              }
          ]}
          options={{
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: true,
                    tools: {
                      zoomin: true,
                      zoomout: true,
                      pan: false,
                      reset: false,
                      download: false,
                      customIcons: [],
                    },
                  },
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
                         

            colors: ["rgba(152,216,158)","rgb(238,132,132)"],
            // colors: ["red", "orange"],
           
            xaxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#858585"] },
                show: true,
              },
            },

            legend: {
              show: true,
              position: "top",
              horizontalAlign: 'right',
            },

            dataLabels: {
            enabled:false,
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
            grid: {
                show: true, 
              },
          
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Barchart;