const SchealudeStats = ({ image, title, name, hora }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 grid place-content-center text-5xl">
        {image}
      </div>
      <div className="col-span-6 flex flex-col text-center  ">
        <p className="text-xl">{title}</p>
        <span className="text-sm"> {name}</span>
      </div>
      <div className="col-span-3 grid place-content-center">{hora}</div>
    </div>
  );
};

export default SchealudeStats;
