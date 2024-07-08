import Hero from "../components/hero/Hero";
import ProductList from "../components/productList/ProductList";
import ProductPage from "../components/productPage/ProductPage";

function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <ProductList />
      <ProductPage />
    </div>
  );
}

export default HomePage;
