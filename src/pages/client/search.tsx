import { IProduct } from "../../types/products";

export const searchProduct = (searchTerm: string, products: IProduct[]) => {
  if (searchTerm && searchTerm.trim() !== '') {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredProducts;
  } else {
    return products;
  }
};

