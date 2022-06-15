import React from "react";
import ShoesItems from "./ShoesItems";

export default function ShoestList(props) {
  const { products, getData } = props;

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ShoesItems productOnClick={getData} productDetails={product} />
          </div>
        );
      })}
    </div>
  );
}
