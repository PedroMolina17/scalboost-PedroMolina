import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
} from '../service/category';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useCategory = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const useGetAllCategories = () =>
    useQuery({
      queryKey: ['categories'],
      queryFn: getAllCategory,
    });

  const addCreateCategoryMutation = useMutation({
    mutationFn: async (data) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      router.push('/category');
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: async ({ id, data }) => updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      router.push('/category');
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: async (data) => deleteCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
    },
  });

  const useGetCategoryById = (id) =>
    useQuery({
      queryKey: ['categories'],
      queryFn: () => getCategoryById(id),
    });

  return {
    addCreateCategoryMutation,
    useGetAllCategories,
    updateCategoryMutation,
    deleteCategoryMutation,
    useGetCategoryById,
  };
};
