import React from 'react';
import Link from 'next/link';
const CancelButton = ({ href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-red-400 text-white rounded-md px-6 py-3 text-lg hover:bg-[#445647] transition-colors">
        Cancelar
      </button>
    </Link>
  );
};

export default CancelButton;
