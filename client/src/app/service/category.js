import axiosInstance from '../api/api';

export const getAllCategory = async () => {
  const res = await axiosInstance.get('/category');
  return res.data;
};

export const getCategoryById = async (id) => {
  try {
    const res = await axiosInstance.get(`/category/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};

export const deleteCategory = async (id) => {
  try {
    const res = await axiosInstance.delete(`/category/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};

export const createCategory = async (product) => {
  try {
    const { data } = await axiosInstance.post('/category', product);
    return data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};

export const updateCategory = async (id, product) => {
  try {
    const { data } = await axiosInstance.put(`/category/${id}`, product);
    return data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};
