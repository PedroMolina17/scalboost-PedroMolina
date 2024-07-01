import { getAllCategory } from '../service/category';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategory,
  });

export const useGetCategorybyId = () => {};
