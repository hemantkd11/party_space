import React from "react";
import CurrencyFormat from "react-currency-format";
import Place from "../Images/place3.jpg";
import { getBasketTotal } from "../Context/UseReducer";
import { useStateValue } from "../Context/UseContex";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const CheckoutPage = () => {
  const Navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  console.log("checkout", basket);
  const RemoveItem = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
  const handelBtn = () => {
    if (getBasketTotal(basket) > 0) {
      Navigate("/add_details");
    } else {
      alert("There is  nothing in your cart");
      Navigate("/onspalce/places");
    }
  };

  return (
    <div className="checkOut-container">
      <div className="checkout-main">
        <div className="shopping-list">
          <h1>Saved Places</h1>
          {basket?.map((items) => (
            <div className="checkout-items">
              <div className="checkout-image">
                <img src={items.image} alt="meeting image" />
              </div>
              <div className="checkout-details">
                <h3>{items.place_name}</h3>
                <div>{items.area}</div>
                <p>₹ {items.price}</p>
                <button
                  className="check-btn"
                  onClick={(e) => RemoveItem(e, items.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="total-amount">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="subtotal">
                  SubTotal({basket.length} items) :<strong>{value}</strong>
                </p>
                <small className="checkbox">
                  {/* <input type="checkbox" /> */}
                  {/* <span> This order contain a gift</span> */}
                </small>
              </>
            )}
            decimalScale={0}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={" ₹ "}
          />
          <button className="subtotal-btn" onClick={handelBtn}>
            Proceed to checkout
          </button>

          <div className="places_poster_box-check">
            <div className="flex-width-poster-check">
              <div className="places_poster_box_img-check ">
                {basket && basket.length > 0 && basket[0]?.image && (
                  <img
                    src={basket[0].image ? basket[0].image : Place}
                    alt="place"
                  />
                )}
              </div>
              <div className="place-poster-text-check">
                <h4>
                  Enjoy your quality time with love once, friends and family
                  with On-Space.
                </h4>
              </div>
              <div className="place-poster-button-check">
                <Button variant="outlined">Book Now</Button>
              </div>
              <div className="place-poster-logo-check">
                <i className="o">O</i>n-<i className="s">S</i>pace
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
