'use client';

import ChartDoughnut from './components/ChartDoughnut';
import StatCard from './components/StatCard';
import SchealudeStats from './components/SchealudeStats';
import { MdLaptop, MdOutlineAppBlocking } from 'react-icons/md';
import { FiLayers } from 'react-icons/fi';
import GraphArea from './components/GraphArea';
const page = () => {
  return (
    <div>
      <div className="text-[#1a4545] flex flex-col gap-4">
        <h2 className="text-4xl">Dash Board Scalboost</h2>
        <p> Solo datos ficticios</p>
      </div>
      <div className=" mt-8 grid grid-cols-12 max-md:grid-cols-1 gap-6 ">
        <div className="flex flex-col gap-4  col-span-7 w-full">
          <StatCard
            title="Producto"
            cantidad={10}
            bgcolor="bg-[#e2f297]"
            textcolor="text-[#445647]"
          />
          <StatCard
            title="Servicio"
            cantidad={10}
            bgcolor="bg-[#5aba8a]"
            textcolor="text-white"
          />
          <StatCard
            title="Servicio"
            cantidad={10}
            bgcolor="bg-[#01565b]"
            textcolor="text-white"
          />
        </div>
        <div className="col-span-5 w-full flex flex-col justify-around items-center ">
          <h2 className="text-xl text-[#1a4545]"> Estadistica Ficticia</h2>
          <ChartDoughnut />
          <div>aaaaa</div>
        </div>

        <div className="col-span-6 p-12 animate-fade-in max-md:p-0 ">
          <GraphArea />
        </div>
        <div className="col-span-6 text-[#1a4545] flex flex-col gap-8 animate-slide-out-top animate-duration-1000 place-content-center">
          <h3 className="text-2xl">Upcoming Schealude</h3>
          <div className="flex flex-col gap-8 animate-fade-in">
            <SchealudeStats
              image={<MdLaptop />}
              title="Desk Time Redesign"
              name="Working On"
              hora="9:30 am"
            />
            <SchealudeStats
              image={<FiLayers />}
              title="New Landing Page"
              name="Working On"
              hora="10:30 am"
            />
            <SchealudeStats
              image={<MdOutlineAppBlocking />}
              title="Create Animation for App"
              name="Working On"
              hora="11:50 am"
            />
          </div>
          <div className="col-span-12 grid place-content-center">
            <button className="bg-[#02545d] text-white px-4 py-2 rounded-md">
              See All Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
