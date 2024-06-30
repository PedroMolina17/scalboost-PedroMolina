import ChartDoughnut from './components/ChartDoughnut';
import StatCard from './components/StatCard';

const page = () => {
  return (
    <div>
      <div className="text-[#1a4545] flex flex-col gap-4 ">
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
      </div>
    </div>
  );
};

export default page;
