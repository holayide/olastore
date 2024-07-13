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
  const KEY = "170472e3177d447089e3aa20498b89b620240712125906895311";

  //   fetch products
  useEffect(() => {
    const fetchProducts = async (page) => {
      const timbuUrl = `/api/products?organization_id=${organ_Id}&reverse_sort=false&page=${page}&size=${itemsPerPage}&Appid=${appId}&Apikey=${KEY}`;

      const resp = await fetch(timbuUrl);
      const data = await resp.json();
      setProducts(data.items);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
    };

    fetchProducts(currentPage);
  }, [currentPage]);

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
