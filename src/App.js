import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./styles.css";
import { products } from "./data/productDetails";

const App = () => {
  const [product, setProduct] = useState(products);
  const [cartCount, setCartCount] = useState([]);
  const cartChanged = (newProduct, index) => {
    setProduct((prevProduct) =>
      prevProduct.map((product, i) => {
        if (index === i) product.inCart = newProduct;

        return product;
      })
    );
  };

  useEffect(() => {
    setCartCount((prevCart) => {
      let cur = product.filter((prod) => {
        return prod.inCart === true;
      });
      return cur;
    });
  }, [product]);

  return (
    <div>
      <Navigation products={cartCount} />
      <Header />
      <Section products={product} setProduct={cartChanged} />
      <Footer />
    </div>
  );
};

export default App;