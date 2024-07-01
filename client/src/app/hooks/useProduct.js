'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import {
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../service/product';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
const formatDate = (isoString) => {
  return format(new Date(isoString), 'MMMM d, yyyy');
};

export const useProduct = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const addProductMutation = useMutation({
    mutationFn: async (data) => createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      router.push('/products');
    },
  });
  const updateProductMutation = useMutation({
    mutationFn: async ({ id, data }) => updateProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      router.push('/products');
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: async (data) => deleteProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const useGetAllProducts = () =>
    useQuery({
      queryKey: ['products'],
      queryFn: getAllProducts,
      select: (products) => {
        const formattedProducts = products
          .map((product) => ({
            ...product,
            fecha: new Date(product.fecha),
          }))
          .sort((a, b) => {
            if (a.fecha.getTime() > b.fecha.getTime()) return -1;
            if (a.fecha.getTime() < b.fecha.getTime()) return 1;
            return 0;
          })
          .map((product) => ({
            ...product,
            fecha: formatDate(product.fecha),
          }));
        return formattedProducts;
      },
    });

  const useGetProductById = (id) =>
    useQuery({
      queryKey: ['products'],
      queryFn: () => getProductById(id),
    });

  return {
    addProductMutation,
    useGetAllProducts,
    useGetProductById,
    deleteProductMutation,
    updateProductMutation,
  };
};
