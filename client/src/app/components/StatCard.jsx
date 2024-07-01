const StatCard = ({
  title,
  cantidad,
  bgcolor,
  textcolor,
  porcentaje,
  time_start,
  time_end,
}) => {
  return (
    <div
      className={` ${bgcolor} w-full p-4 rounded-xl  justify-between items-center gap-5 animate-slide-out-top animate-duration-1000 grid grid-cols-12`}
    >
      <div className="col-span-6 max-md:col-span-12 flex gap-4 items-center max-md:justify-center">
        <div
          className="bg-white w-24 h-20 grid place-content-center rounded-md"
          style={{
            clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
          }}
        >
          <p className="text-xs ">Cant.</p>
          <p className="text-2xl font-bold text-center "> {cantidad}</p>
        </div>
        <div className={` flex ${textcolor}`}>
          <p>{title}</p>
        </div>
        <div className="bg-white rounded-xl w-12 text-center h-8">
          {porcentaje}
        </div>
      </div>
      <div className="col-span-6 max-md:col-span-12 flex max-md:justify-center">
        <div className="w-full flex items-center justify-around ">
          <div className="flex flex-col">
            <p>Productive Time</p>
            <span className="font-bold">{time_start}</span>
          </div>
          <div className="flex flex-col">
            <p>Productive to Work</p>
            <span className="font-bold">{time_end}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
