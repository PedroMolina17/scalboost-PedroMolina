import { fetchProducts } from '../query/productQuery';

const useProduct = () => {
  return ['products'], fetchProducts;
};

export default useProduct;
