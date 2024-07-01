import axiosInstance from '../api/api';

export const getAllProducts = async () => {
  const res = await axiosInstance.get('/products');
  return res.data;
};

export const getProductById = async (id) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axiosInstance.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};

export const createProduct = async (product) => {
  try {
    const { data } = await axiosInstance.post('/products', product);
    return data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};

export const updateProduct = async (id, product) => {
  try {
    const { data } = await axiosInstance.put(`/products/${id}`, product);
    return data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error(
      'Error al crear el producto. Inténtalo de nuevo más tarde.',
    );
  }
};
