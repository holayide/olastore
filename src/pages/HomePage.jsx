import Hero from "../components/hero/Hero";
import ProductList from "../components/productList/ProductList";
import ProductPage from "../components/productPage/ProductPage";
import Footer from "../components/footer/Footer";
import ProductNumber from "../components/pagination/ProductNumber";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#f1f5f8" }}>
      <Hero />
      <ProductList />
      <ProductPage />
      <ProductNumber />
      <Footer />
    </div>
  );
}

export default HomePage;
