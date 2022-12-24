import React from "react";
import ProductCard from "./ProductCard";

const Section = ({ products, setProduct }) => {
  const cartUpdated = (newProduct, i) => {
    setProduct(newProduct, i);
  };
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              setProduct={cartUpdated}
              id={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;