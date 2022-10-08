import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	datasets: [
		{
			label: '# of Hours',
			data: [30, 40, 30, 20],
			backgroundColor: [
				'rgba(26, 176, 176, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(248, 92, 127, 1)',
				'rgba(134, 118, 254, 1)',
				'',
			],
		},
	],
	// labels: ['Cardio', 'Stretching', 'Treadmill', 'Strength'],
};

export function DoughnutChart() {
  return <Doughnut data={data}  />;
}
