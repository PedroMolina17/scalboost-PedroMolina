import Link from 'next/link';
const CreateButton = ({ href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-[#5aba8a] text-white rounded-md px-6 py-3 text-lg hover:bg-[#445647] transition-colors">
        Agregar
      </button>
    </Link>
  );
};

export default CreateButton;
