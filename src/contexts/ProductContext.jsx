import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}{" "}
    </ProductContext.Provider>
  );
}
