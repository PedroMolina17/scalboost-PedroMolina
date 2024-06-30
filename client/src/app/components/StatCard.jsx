const StatCard = ({ title, cantidad, bgcolor, textcolor }) => {
  return (
    <div
      className={`h-40 ${bgcolor} w-full p-4 rounded-xl flex items-center gap-5`}
    >
      <div className="bg-white w-16 h-20 grid place-content-center rounded-md ">
        <p className="text-xs ">Cant.</p>
        <p className="text-2xl font-bold text-center "> {cantidad}</p>
      </div>
      <div className={` flex ${textcolor}`}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
