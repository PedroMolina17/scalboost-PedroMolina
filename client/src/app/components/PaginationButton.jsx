const PaginationButton = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-6 py-3  rounded-md text-lg  ${isSelected ? 'bg-[#5aba8a] text-white' : 'bg-slate-100 text-black border'}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default PaginationButton;
