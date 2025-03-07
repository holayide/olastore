import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 12;

  const organ_Id = "2608760f79b041a2a94ab81328b9395e";
  const appId = "IY6EJEGAVN439JY";
  const KEY = import.meta.env.VITE_API_KEY;

  //   fetch products
  useEffect(() => {
    const fetchProducts = async (page) => {
      const timbuUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${organ_Id}&reverse_sort=false&page=${page}&size=${itemsPerPage}&Appid=${appId}&Apikey=${KEY}`;
      const resp = await fetch(timbuUrl);
      const data = await resp.json();
      setProducts(data.items);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
    };

    fetchProducts(currentPage);
  }, [currentPage, KEY]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductContext.Provider
      value={{ products, currentPage, totalPages, paginate }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
