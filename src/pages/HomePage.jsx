import Hero from "../components/hero/Hero";
import ProductList from "../components/productList/ProductList";
import ProductPage from "../components/productPage/ProductPage";
import Footer from "../components/footer/Footer";

function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <ProductList />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default HomePage;
