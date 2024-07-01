'use client';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import CreateButton from '../components/CreateButton';
import { useProduct } from '../hooks/useProduct';
import { CiEdit } from 'react-icons/ci';
import { GrPrevious, GrNext } from 'react-icons/gr';

import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import PaginationButton from '../components/PaginationButton';
const Products = () => {
  const { useGetAllProducts, deleteProductMutation } = useProduct();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const deleteProduct = (id) => {
    deleteProductMutation.mutate(id);
  };
  const goToPage = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
    table.setPageIndex(pageIndex);
  };

  const { data: products, isLoading: isLoadingProducts } = useGetAllProducts();

  const columns = [
    {
      accessorKey: 'id_product',
      header: 'ID',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'name',
      header: 'Nombre',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'cantidad',
      header: 'Cantidad',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'fecha',
      header: 'Fecha',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'precio',
      header: 'Precio',
      cell: (info) => info.getValue(),
    },
    {
      header: 'Accion',
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');
  const table = useReactTable({
    data: products || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return isLoadingProducts ? (
    <p>Cargando productos...</p>
  ) : (
    <div>
      <div className="flex justify-between ">
        <div>
          <h2 className="text-2xl text-[#1a4545]">Lista de Productos</h2>
          <SearchInput
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        </div>
        <CreateButton href={'products/create'} />
      </div>

      <table className="w-full mt-5 ">
        <thead className="bg-[#5aba8a] w-full h-14 text-[#1a4545] rounded-tr-md rounded-tl-md ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <button className="flex gap-2 items-center justify-center w-14">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {
                        { asc: <FaArrowUp />, desc: <FaArrowDown /> }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </button>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-10">
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {index === columns.length - 1 && (
                    <div className="flex">
                      <button
                        onClick={() => deleteProduct(row.original.id_product)}
                        // href={`/products/edit/${row.original.id_product}`}
                        // onClick={() => setOpenForm('delete')}
                        className="text-red-500 text-2xl focus:outline-none "
                        aria-label="Eliminar producto"
                      >
                        <MdDeleteOutline className="text-xl" />
                      </button>
                      <Link
                        href={`/products/edit/${row.original.id_product}`}
                        onClick={() => console.log(row.original.id_product)}
                        className="text-yellow-500 text-2xl focus:outline-none "
                        aria-label="Eliminar producto"
                      >
                        <CiEdit className="text-xl" />
                      </Link>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-full justify-around mt-6">
        <PaginationButton
          onClick={() => table.previousPage()}
          name={<GrPrevious />}
        />
        {[...Array(table.getPageCount()).keys()].map((index) => (
          <PaginationButton
            key={index}
            onClick={() => goToPage(index)}
            name={index + 1}
            isSelected={index === currentPageIndex}
          />
        ))}
        <PaginationButton onClick={() => table.nextPage()} name={<GrNext />} />
      </div>
    </div>
  );
};

export default Products;
