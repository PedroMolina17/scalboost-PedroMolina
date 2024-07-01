import options from './option';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const user = [
  { id: 5, nombre: 'Mayo', totalCompra: 250 },
  { id: 6, nombre: 'Junio', totalCompra: 151 },
  { id: 7, nombre: 'Julio', totalCompra: 350 },
  { id: 8, nombre: 'Agosto', totalCompra: 450 },
  { id: 9, nombre: 'Septiembre', totalCompra: 400 },
  { id: 10, nombre: 'Octubre', totalCompra: 150 },
  { id: 11, nombre: 'Noviembre', totalCompra: 300 },
  { id: 12, nombre: 'Diciembre', totalCompra: 150 },
];

const data = {
  labels: user.map((item) => item.nombre),
  datasets: [
    {
      label: 'Total de Compra por Mes',
      data: user.map((item) => item.totalCompra),
      backgroundColor: 'rgba(1, 86, 91, 0.4)',
      borderColor: 'rgba(26, 69, 69, 1)',
      borderWidth: 1,
      fill: true,
    },
  ],
};

const GraphArea = () => {
  return (
    <div className=" h-full w-full  text-[#01565b] flex items-center justify-center animate-fade-in">
      <Line data={data} options={options} className="bg-white rounded-xl p-2" />
    </div>
  );
};

export default GraphArea;
