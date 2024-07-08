import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
