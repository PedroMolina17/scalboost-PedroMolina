import { FaSearch } from 'react-icons/fa';
const SearchInput = ({ value, onChange }) => {
  return (
    <div className="p-2  border flex gap-2 items-center text-[#1a4545] rounded-md focus-within:border-[#5aba8a]">
      <input
        className="outline-none focus:outline-none"
        value={value}
        onChange={onChange}
      />
      <FaSearch />
    </div>
  );
};

export default SearchInput;
