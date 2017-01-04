import React, { Component } from 'react';
// import d3 from 'd3';
import Chart from "chart.js";



class Radar extends Component {

	
	componentDidMount() {
		Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
		Chart.defaults.global.defaultFontSize = 16;

		new Chart(document.getElementById("myChart"), {
		    type: 'radar',
		    data: {
		        labels: ["Red", "Blue", "Yeller", "Green", "Purple", "Marty", "Red", "Darin"],
		        datasets: [
		        	{
			            label: "My First dataset",
			            fill: true,
			            lineTension: 0.1,
			            backgroundColor: "rgba(205,92,173,0.2)",
			            borderColor: "rgba(205,92,173,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(205,92,173,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(205,92,173,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [65, 59, 80, 81, 56, 55, 40, 81],
			            spanGaps: false,
			        },
			        {
			            label: "My First dataset",
			            fill: true,
			            lineTension: 0.1,
			            backgroundColor: "rgba(244,180,64,.20)",
			            borderColor: "rgba(244,180,64,1.00)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(244,180,64,1.00)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(244,180,64,1.00)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [35, 89, 71, 64, 33, 92, 52, 63],
			            spanGaps: false,
			        },
			        {
			            label: "My Second dataset",
			            fill: true,
			            lineTension: 0.1,
			            backgroundColor: "rgba(72,200,231,0.2)",
			            borderColor: "rgba(72,200,231,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(72,200,231,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(72,200,231,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [25, 79, 60, 51, 86, 65, 92, 45],
			            spanGaps: false,
			        },
		    ]
		    },
		    options: {
		    	responsive:true,
		    	cutoutPercentage: 2,
		    	gridLines: {
		    		color: "rgba(255,255,255,0.1)",
		    		zeroLineColor: "rgba(255,255,255,0.1)",
		    	},
		    	elements: {
		    		line: {
		    			tension: .25,
		    			capBezierPoints: true,
		    		}
		    	},
	            scale: {
	                reverse: false,
	                ticks: {
	                	display: false,
	                    beginAtZero: true,
	                    showLabelBackdrop: false,
	                    min:0,
	                    stepSize: 20,
		            	max:100,
		            	suggestedMax: 100,
	                },
	                pointLabels: {
	                	fontSize:12,
	                	fontColor:"#777",
	                }
	            },
	            legend: {
	            	position: 'bottom',
	            	display: false,
	            	fullWidth: false,
	            	fontColor: "#ddd",
	            	labels: {
	            		fontColor: "#ddd",
	            		display: false,
	            	}
	            }
		    }
		});
	};


	render() {

		return(
			 <canvas id="myChart"></canvas>
		);
	
	}
}


export default Radar;