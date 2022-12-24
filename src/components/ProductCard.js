import React, { useState } from "react";

const ProductCard = (props) => {
  const { name, price, rating, inCart } = props.product;
  const [cart, setCart] = useState(!inCart);
  const onClick = () => {
    setCart(!cart);
    props.setProduct(cart, props.id);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>

        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt={name}
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {rating.map((star, i) => {
                return <div key={i} className={`bi-${star}-fill`}></div>;
              })}
            </div>
            ${price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button onClick={onClick} className="btn btn-outline-dark mt-auto">
              {`${cart ? "Add to Cart" : "Remove from Cart"}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;