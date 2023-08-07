import React from "react";

const Login_Commponent = ({
  Logo,
  Remember_type,
  Remember_lebal,
  Heading,
  Label_pass,
  Label_user,
  type_pass,
  type_user,
  type_submit,
  value_submit,
  value_user,
  value_passwword,
  placeholder_user,
  placeholder_password,
  onClick,
}) => {
  return (
    <div className="Login-form-container">
      <div className="Login-form-wrapper">
        <div className="Login-form-main-container">
          <div className="login-logo">{Logo}</div>
          <div className="login-type">
            <div>{Heading}</div>
          </div>
          <form className="form-loin">
            <div className="user-login form-input">
              <label>{Label_user}</label>
              <input
                type={type_user}
                placeholder={placeholder_user}
                value={value_user}
                required
              />
            </div>
            <div className="pass-login form-input">
              <label>{Label_pass}</label>
              <input
                type={type_pass}
                placeholder={placeholder_password}
                value={value_passwword}
                required
              />
            </div>
            <div className="login-submit  submit-login-btn">
              <input type={type_submit} value={value_submit} />
            </div>
            <div className="rember-forget-login-box">
              <div className="login-rem-part">
                <input type={Remember_type} />
                <label>{Remember_lebal}</label>
              </div>
              <div className="login-forget-link">
                <a href="#">Forget Password</a>
              </div>
            </div>
            <div className="create-acount-box">
              <div className="login-forget-link" onClick={onClick}>
                Create An Account
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_Commponent;
