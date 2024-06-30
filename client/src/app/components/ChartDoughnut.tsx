'use client';
import Image from 'next/image';

import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PluginOptionsByType,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);
const user = [
  { id: 1, nombre: 'Pedro', totalCompra: 185 },
  { id: 2, nombre: 'Juan', totalCompra: 180 },
  { id: 3, nombre: 'Jacinta', totalCompra: 180 },
];
const data = {
  labels: user.map((item) => item.nombre),
  datasets: [
    {
      data: user.map((item) => item.totalCompra),
      backgroundColor: ['#e2f297', '#5aba8a', '#01565b'],
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
      onClick: (_, legendItem, legend) => {
        if (legendItem && legend) {
          console.log(`Clic en la leyenda: ${legendItem.text}`);
          console.log(`Índice de la leyenda: ${legendItem.index}`);
          console.log(
            `Estado de la leyenda: ${legendItem.hidden ? 'oculto' : 'visible'}`,
          );
          console.log(`Lista de todas las leyendas:`, legend.legendItems);
        }
      },
    },
  },
};
const ChartDoughnut = () => {
  return (
    <div className="w-56 h-56 text-black relative">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-white flex justify-center items-center">
        <div className="bg-[#e0f095] w-28 h-28 rounded-full flex flex-col items-center justify-center">
          <Image
            src="http://localhost:3001/cohete.png"
            alt="cohete.png"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartDoughnut;
