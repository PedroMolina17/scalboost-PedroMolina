'use client';
import { getProducts } from '../query/productQuery';
import { useQuery } from '@tanstack/react-query';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import CreateButton from '../components/CreateButton';

const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const columns = [
    {
      accessorKey: 'id_product',
      header: 'ID',
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
      accessorKey: 'precio',
      header: 'Precio',
      cell: (info) => info.getValue(),
    },
  ];

  const table = useReactTable({
    data: products || [], // Ensure data is an array even if it's undefined
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return isLoading ? (
    <p>Cargando productos...</p>
  ) : isError ? (
    <p>Error al cargar productos: {error.message}</p>
  ) : (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-2xl text-[#1a4545]">Lista de Productos</h2>
        <CreateButton href={'products/create'} />
      </div>

      <table className="w-full mt-5">
        <thead className="bg-[#5aba8a] w-full h-14 text-[#1a4545]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-10">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
