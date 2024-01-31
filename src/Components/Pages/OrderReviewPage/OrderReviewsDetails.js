import React, { useState } from "react";

const OrderReviewsDetails = ({
  cartProductData,
  handlePlusMinus,
  deleteItem,
}) => {
  //setting the quentity only
  const [quantity, setQuantity] = useState(cartProductData?.quantity);
  const plus = (id) => {
    setQuantity(quantity + 1);
    handlePlusMinus(id, quantity + 1);
  };

  const minus = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handlePlusMinus(id, quantity - 1);
    }
  };

  return (
    <>
      <div className="cartBodyMain" data-aos="fade-up">
        <section className="row cartBody">
          <span className="col-md-2 productImageCart">
            <img src={cartProductData?.imageAsSelectedColor} alt=" " />
          </span>
          <span className="col-md-4 CartProductName">
            Name: {cartProductData?.name}
            <br />
            <b className="CartProductSKU">SKU: {cartProductData?.code}</b>
            <br />
            <b className="CartProductSKU">
              Size: {cartProductData?.selectedSize}
            </b>
            <br />
            <b className="CartProductSKU d-flex">
              Color:
              <div
                style={{
                  marginLeft: "5px",
                  height: "20px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: `${cartProductData?.selectedColor}`,
                  border: "1px solid black",
                }}
              ></div>
            </b>
          </span>

          <span className="col-md-2 productQuantityButton">
            <div className="CartQuantity">
              <button className="incDec">
                <i
                  className="bi bi-dash"
                  onClick={() => minus(cartProductData._id)}
                ></i>
              </button>
              <input
                type="text"
                className="form-control CartQntInput"
                readOnly
                value={quantity}
              />
              <button className="incDec">
                <i
                  className="bi bi-plus"
                  onClick={() => plus(cartProductData._id)}
                ></i>
              </button>
            </div>
          </span>

          <span className="col-md-2 CartProductPrice">
            Price: {cartProductData?.currentPrice} Tk.
            <br />
            <s className="CartProductPriceOld">
              {cartProductData?.oldPrice} Tk.
            </s>
          </span>

          <span className="col-md-1 productDelete">
            <i
              className="bi bi-trash"
              onClick={() => deleteItem(cartProductData._id)}
            ></i>
          </span>
        </section>
      </div>
    </>
  );
};

export default OrderReviewsDetails;
