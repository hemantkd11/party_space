import React, { useState } from "react";

const User_register = () => {
  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    Area_name: "",
    district: "",
    state: "",
    pincode: "",
    full_address: "",
    age: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setdata(e.target.value);
  };
  return (
    <div className="demo-container">
      <div className="demo-box">
        <div className="demo-wrapper">
          <div className="demo-request-form">
            <div className="demo-request-box">
              <div className="login-logo">
                <span className="span-onspace">
                  <i>O</i>n
                </span>
                -<i>S</i>pace
              </div>
              <div className="type-of-user-rester">User Register Form</div>
              <form>
                <div className="demo-request-wrapper">
                  <div className="name-input demo-flex-box">
                    <div className="details-box ">
                      <label>User Name*</label>
                      <input
                        type="text"
                        placeholder="UserName"
                        name="first_name"
                        value={data.first_name}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* {data.error && (
                        <div className="error-message">{data.error}</div>
                      )} */}
                  {/* first and last name */}
                  <div className="name-input demo-flex-box">
                    <div className="details-box ">
                      <label>FIRST NAME*</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={data.first_name}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="details-box ">
                      <label>LAST NAME*</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="Last_name"
                        value={data.last_name}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="email-info  details-box">
                    <label>EMAIL*</label>
                    <input
                      placeholder="Enter Your Email Address"
                      name="Email"
                      value={data.email}
                      onChange={handleInput}
                    />
                  </div>
                  {/* age and phone and pincode */}
                  <div className="name-input demo-flex-box">
                    {/* <div className="company-info details-box">
                      <label>Charges Per Hour</label>
                      <input
                        placeholder="Changes per Hour"
                        name="changes"
                        value={data.pincode}
                        onChange={handleInput}
                      /> */}
                    {/* </div> */}
                    {/* <div className="details-box ">
                      <label>Area Pin-code*</label>
                      <input
                        placeholder="Area Pincode"
                        name="pincode"
                        value={data.pincode}
                        onChange={handleInput}
                      />
                    </div> */}
                  </div>

                  {/* district  and  area name*/}
                  <div className="email-info demo-flex-box">
                    {/* <div className="details-box ">
                      <label>District*</label>
                      <input
                        type="text"
                        placeholder="Your District ?"
                        name="District"
                        value={data.district}
                        onChange={handleInput}
                      />
                    </div> */}
                    <div className="details-box ">
                      <label>Area Location Name*</label>
                      <input
                        type="text"
                        placeholder="Your Current Area Name"
                        name="District"
                        value={data.district}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="details-box ">
                      <label>Image (jpg,png)*</label>
                      <input
                        type="file"
                        placeholder="Your Current Area Name"
                        name="District"
                        value={data.district}
                        onChange={handleInput}
                      />
                    </div>
                  </div>

                  {/* full address */}
                  {/* <div className="email-info demo-flex-box">
                    <div className="details-box ">
                      <label>Place Address*</label>
                      <input
                        type="text"
                        placeholder="Full Address With House No."
                        name="District"
                        value={data.district}
                        onChange={handleInput}
                      />
                    </div>
                  </div> */}
                  {/* button for submit */}
                  <div className=" demo-submit-btn details-box ">
                    <input
                      type="submit"
                      value="Register"
                      //   onClick={user_submit}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_register;
