import React,{useState, useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,  Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function Piechart()
{
    
    return(
        <React.Fragment>
             <div style={{width: '95%', height: '95%', marginTop:"25px"}}>
             <Doughnut 
                
                
                data={{                                          
                labels: ['Basic Tees','Super Hoodies','Custom Short Pants'],
                
                datasets: [
                    {
                      label: 'Amount',
                      data: [30,20,10],
                      backgroundColor: [
                        "rgba(152,216,158)","rgb(238,132,132)", 'rgba(246,220,125)'
                      ],
                    
                      borderWidth: 1,                    
                    },
                  ],
                 
            }}

            options={{
                            
              maintainAspectRatio: false,
               height: '200px',
               width: '200px',
        
                plugins:{
                    legend:{
                      position: 'right',
                    },
                    outlabels: {
                      text: '%l %p',
                      color: 'white',
                      stretch: 35,
                      font: {
                        resizable: true,
                        minSize: 12,
                        maxSize: 18,
                      },
                    },                        
                 },
                  
                             
               }}    
              style={{marginLeft:"50px", }}/>
             </div>
           
           
       
  
    </React.Fragment>
    );

}
export default Piechart;