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
import { CiEdit } from 'react-icons/ci';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import PaginationButton from '../components/PaginationButton';
import { useCategory } from '../hooks/useCategory';
import Swal from 'sweetalert2';
const Category = () => {
  const { useGetAllCategories, deleteCategoryMutation } = useCategory();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [cantidadFilter, setCantidadFilter] = useState('');

  const alertConfirm = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  const deleteCategory = (id) => {
    deleteCategoryMutation.mutate(id);
  };
  const goToPage = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
    table.setPageIndex(pageIndex);
  };

  const { data: categories, isLoading: isLoadingCategories } =
    useGetAllCategories();

  const columns = [
    {
      accessorKey: 'id_category',
      header: 'ID',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'name',
      header: 'Nombre',
      cell: (info) => info.getValue(),
    },
    {
      header: 'Accion',
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');
  const table = useReactTable({
    data: categories || [],
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

  return isLoadingCategories ? (
    <p>Cargando Categorias...</p>
  ) : (
    <div>
      <div className="flex justify-between ">
        <div>
          <h2 className="text-2xl text-[#1a4545]">Lista de Categorias</h2>
          <SearchInput
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        </div>

        <CreateButton href={'category/create'} />
      </div>

      <table className="w-full mt-5 text-center">
        <thead className="bg-[#5aba8a] w-full h-14 text-[#1a4545] rounded-tr-md rounded-tl-md ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div className="">
                      <button className="">
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
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-16">
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id} className="items-center">
                  <div className="flex justify-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                  {index === columns.length - 1 && (
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        onClick={() => alertConfirm(row.original.id_category)}
                        // href={`/products/edit/${row.original.id_product}`}
                        // onClick={() => setOpenForm('delete')}
                        className="text-white text-2xl focus:outline-none p-2 bg-red-500 rounded-md"
                        aria-label="Eliminar producto"
                      >
                        <MdDeleteOutline className="text-xl" />
                      </button>
                      <Link
                        href={`/category/edit/${row.original.id_category}`}
                        onClick={() => console.log(row.original.id_category)}
                        className="text-white text-2xl focus:outline-none p-2  bg-yellow-500 rounded-md"
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

export default Category;
