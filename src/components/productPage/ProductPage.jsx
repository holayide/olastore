import ProductItems from "./ProductItems.jsx";
import Sort from "./Sort.jsx";

function ProductPage() {
  return (
    <div className="container">
      <div>
        <Sort />
        <ProductItems />
      </div>
    </div>
  );
}

export default ProductPage;
