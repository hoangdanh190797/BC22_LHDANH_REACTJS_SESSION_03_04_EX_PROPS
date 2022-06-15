import React from "react";

export default function InfoDetails(props) {
  const { products } = props;
  //Check
  if (!products) return null;

  return (
    <div
      className="modal fade"
      id="product-details"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Details
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img src={products.image} width="100%" alt="" />
              </div>
              <div className="col-sm-8">
                <table className="table ">
                  <tbody>
                    <tr>
                      <td>Id: </td>
                      <td>{products.id}</td>
                    </tr>
                    <tr>
                      <td>Name: </td>
                      <td>{products.name}</td>
                    </tr>
                    <tr>
                      <td>Description: </td>
                      <td>{products.description}</td>
                    </tr>
                    <tr>
                      <td>Short Description: </td>
                      <td>{products.shortDescription}</td>
                    </tr>
                    <tr>
                      <td>Price: </td>
                      <td>{products.price} $</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
