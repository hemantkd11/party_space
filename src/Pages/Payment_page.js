import React from "react";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
import UPI from "../Images/upi.jpeg";
import Card from "../Images/card.jpg";
import Wallet from "../Images/wallet.jpg";
import Paytmss from "../Images/ptm.png";
import Net from "../Images/net.png";
import Gpay from "../Images/gpay_logo.png";
import PhonePe from "../Images/PhonePe_logo.png";
import { useStateValue } from "../Context/UseContex";
import { Button } from "@mui/material";

const Payment_page = () => {
  const [{ OrderPage, AboutTime }] = useStateValue();
  console.log("time", AboutTime);
  const OpenGpay = ()=>{
    document.getElementById("gpay").style.display =  "flex"
    document.getElementById("Phonepe").style.display =  "none"
    document.getElementById("Paytm").style.display =  "none"

  }
  const PhonePE = ()=>{
    document.getElementById("gpay").style.display =  "none"
    document.getElementById("Phonepe").style.display =  "flex"
    document.getElementById("Paytm").style.display =  "none"

  }
  const Paytm = ()=>{
    document.getElementById("gpay").style.display =  "none"
    document.getElementById("Phonepe").style.display =  "none"
    document.getElementById("Paytm").style.display =  "flex"

  }

  return (
    <div className="Payment_page_container">
      <div className="payment_wrapper">
        <div className="payment_main_wrapper">
          <div className="payment-heading">Select Payment Mode</div>
          <div className="payment-way">
            <div className="type_of_mode">
              <div className="payment_option_list">Payment Options</div>
              <div className="upi-mode">
                <div className="upi_logo">
                  <img src={UPI} alt="logo"/>
                </div>
                <div className="pui-box">
                  <div className="Upi-text">UPI</div>
                  <div className="upi_list">
                    Google pay, PhonePe, all upi supported
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="upi-mode">
                <div className="upi_logo">
                  <img src={Card} alt="logo" />
                </div>
                <div className="pui-box">
                  <div className="Upi-text">Credit / Debit / ATM Card</div>
                  <div className="upi_list">
                    All major card provider are supported 
                  </div>
                </div>
              </div>
              {/* wallet */}
              <div className="upi-mode">
                <div className="upi_logo">
                  <img src={Wallet} alt="logo"/>
                </div>
                <div className="pui-box">
                  <div className="Upi-text">Mobile Wallet</div>
                  <div className="upi_list">All major banks are supported</div>
                </div>
              </div>
              {/* banking */}
              <div className="upi-mode">
                <div className="upi_logo">
                  <img src={Net} alt="logo" />
                </div>
                <div className="pui-box">
                  <div className="Upi-text">Net Banking</div>
                  <div className="upi_list">All major banks are supported</div>
                </div>
              </div>
              {/*  */}
            </div>
            {/* seleted mode */}
            <div className="Details_of_payment">
              <div className="selected_mode">
                <div className="payment_option_list">Selected Mode Is Upi</div>
                {/* mode one */}
                <div className="Mode_one mode" onClick={OpenGpay}>
                  <div className="gpay_mode">
                    <img src={Gpay}  alt="logo"/>
                  </div>
                  <div>GooglePay UPI</div>
                </div>
                <div id="gpay">
                  <input
                    type="text"
                    placeholder="GooglePay Upi Example 765XXXX2XX@Upi"
                  />
                  <Button variant="contained">Pay</Button>
                </div>
                {/* mode two */}
                <div className="Mode_two mode" onClick={PhonePE}>
                  <div className="gpay_mode">
                    <img src={PhonePe} alt="logo"/>
                  </div>
                  <div>PhonePe UPI</div>
                </div>
                <div id="Phonepe">
                  <input
                    type="text"
                    placeholder="PhonePe Upi Example 765XXXX2XX@Upi"
                  />
                  <Button variant="contained">Pay</Button>
                </div>
                {/* mode three */}
                <div className="Mode_one mode" onClick={Paytm}>
                  <div className="gpay_mode">
                    <img src={Paytmss} alt="logo"/>
                  </div>
                  <div>PayTm UPI</div>
                </div>
                <div id="Paytm">
                  <input
                    type="text"
                    placeholder="Paytm Upi 765XXXX2XX@Upi"
                  />
                  <Button variant="contained">Pay</Button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="item_list">
              <div className="item_wrapper">
                <div className="main_item_wrapper">
                  {OrderPage.map((item) => (
                    <>
                      <div className="item_img">
                        <img src={item.img_url} alt="logo"/>
                      </div>
                      <div className="place_details">
                        <p>
                          <strong>Place Name: </strong> {item.place_name}
                        </p>
                        <p>
                         
                          <strong>Area: </strong> {item.area}
                        </p>
                        <p>
                         
                          <strong>Price: </strong> ₹ {item.price}
                        </p>
                      </div>
                    </>
                  ))}
                  <div className="time_date">
                    {AboutTime?.map((items) => (
                      <>
                        <div>
                          <strong className="td">Date : </strong> {items.date}
                        </div>
                        <div>
                          <strong className="td">From : </strong>  {items.timefrom}
                        </div>
                        <div>
                          <strong className="td">To : </strong>  {items.timefromOut}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment_page;
