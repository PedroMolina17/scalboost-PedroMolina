import axiosInstance from '../api/api';

export const getAllCategory = async () => {
  const res = await axiosInstance.get('/category');
  return res.data;
};
