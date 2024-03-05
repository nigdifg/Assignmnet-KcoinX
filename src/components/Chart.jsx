import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Buy', 'Hold', 'Sell'],
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
        }]
    });

    const [series, setSeries] = useState([76,8,16]);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="pie" width={380} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default ApexChart;