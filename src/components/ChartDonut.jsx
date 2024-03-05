import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'donut',
        },
        labels: ['Crownsale Invistor ', 'Foundation'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        dataLabels: {
            enabled: false
        },
    });

    const [series, setSeries] = useState([80,20]);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="donut" width={380} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default ApexChart;