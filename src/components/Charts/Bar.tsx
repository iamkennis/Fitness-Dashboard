import React from 'react';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export const data = {
	labels,
	datasets: [
		{
			data: labels.map(() => faker.datatype.number({ min: 1, max: 100 })),
			backgroundColor: 'rgba(232, 241, 253, 1)',
			hoverBackgroundColor: 'rgba(255, 132, 75, 1)',
			borderRadius: 5,
		},
	],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
