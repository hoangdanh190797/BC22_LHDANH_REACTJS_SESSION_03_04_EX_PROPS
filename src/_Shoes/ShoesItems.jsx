import React from "react";

export default function ShoesItems(props) {
  const { productDetails, productOnClick } = props;
  return (
    <div className="card">
      <img src={productDetails.image} alt={productDetails.name} />
      <div className="card-body">
        <h4 className="card-title">{productDetails.name}</h4>
        <p className="card-text">{productDetails.price} $</p>
        <button
          data-toggle="modal"
          data-target="#product-details"
          onClick={() => productOnClick(productDetails)}
          className="text-white bg-dark p-2"
          href=""
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
