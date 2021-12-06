import React from 'react'
import { Line } from 'react-chartjs-2'


export const PriceChart = ({data}) => {
      return (
          <div>
              <Line 
                data={data}
                options = {{
                    plugins: {
                        title: {
                          display: true,
                          text: "Cryptocurrency prices"
                        },
                        legend: {
                          display: true,
                          position: "bottom"
                        }
                      }
                    }}
                  />      
          </div>
      )

    }
