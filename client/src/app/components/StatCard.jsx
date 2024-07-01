const StatCard = ({ title, cantidad, bgcolor, textcolor }) => {
  return (
    <div
      className={`h-32 ${bgcolor} w-full p-4 rounded-xl flex items-center gap-5 animate-slide-out-top animate-duration-1000 `}
    >
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
    </div>
  );
};

export default StatCard;
