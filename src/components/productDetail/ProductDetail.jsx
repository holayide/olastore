import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";
import SingleProduct from "./SingleProduct";
import { ItemBreadCrum } from "../breadCrumb/BreadCrumb";

function ProductDetail() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((e) => e.id === id);
  // console.log(product);

  return (
    <div>
      <ItemBreadCrum product={product} />
      <SingleProduct product={product} addToCart={addToCart} />
      {/* <DescriptionBox /> */}
    </div>
  );
}

export default ProductDetail;
