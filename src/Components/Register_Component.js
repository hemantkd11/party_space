import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const Register_Component = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    first_name: "",
    Last_name: "",
    Contact_No: "",
    Course: "",
    Qualification: "",
    Message: "",
    error: "",
  });

  const handleInput = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    if (
      !data.Email ||
      !data.first_name ||
      !data.Last_name ||
      !data.Contact_No ||
      !data.Course ||
      !data.Qualification ||
      !data.Message
    ) {
      setData({ ...data, error: "All fields are required." });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.Email)) {
      setData({ ...data, error: "Invalid email format." });
      return false;
    }

    // Additional field validations can be added here

    return true;
  };

  const addProduct = async (e) => {
    e.preventDefault();
    console.log(data);

    if (validateFields()) {
      try {
        const response = await fetch(
          " http://127.0.0.1:8001/indiapp/v1/PersonalInfo/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          // Registration successful
          setData({ ...data, registrationSuccess: true });
        } else {
          // Registration failed
          const errorData = await response.json();
          setData({ ...data, error: errorData.error });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (data.registrationSuccess) {
    Swal.fire("Thank You! user register successfully");
    navigate("/");
  }

  return (
    <div className="demo-container">
      <div className="demo-box">
        <div className="demo-wrapper">
          <div className="demo-request-form">
            <div className="demo-request-box">
              <form>
                <div className="demo-request-wrapper">
                  {data.error && (
                    <div className="error-message">{data.error}</div>
                  )}
                  {/* first and last name */}
                  <div className="name-input demo-flex-box">
                    <div className="details-box ">
                      <label>FIRST NAME*</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={value_firstname}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="details-box ">
                      <label>LAST NAME*</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="Last_name"
                        value={data.Last_name}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* company name */}
                  <div className="company-info details-box">
                    <label>Course*</label>
                    <input
                      placeholder="Company Name"
                      name="Course"
                      value={data.Course}
                      onChange={handleInput}
                    />
                  </div>
                  {/* email */}
                  <div className="email-info  details-box">
                    <label>EMAIL*</label>
                    <input
                      placeholder="Please use a company email address"
                      name="Email"
                      value={data.Email}
                      onChange={handleInput}
                    />
                  </div>
                  {/* type of company and location */}
                  <div className="email-info demo-flex-box">
                    <div className="details-box ">
                      <label>Qualification*</label>
                      <input
                        placeholder="Add your qualification"
                        name="Qualification"
                        value={data.Qualification}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="details-box ">
                      <label>Contact Number*</label>
                      <input
                        type="text"
                        placeholder="Phone No."
                        name="Contact_No"
                        value={data.Contact_No}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* message */}
                  <div className="details-box ">
                    <label>Message</label>
                    <textarea
                      placeholder="Type your message here"
                      rows="10"
                      name="Message"
                      value={data.Message}
                      onChange={handleInput}
                    />
                  </div>
                  {/* button for submit */}
                  <div className=" demo-submit-btn details-box ">
                    <input
                      type="submit"
                      value="Get Demo "
                      onClick={addProduct}
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

export default Register_Component;
