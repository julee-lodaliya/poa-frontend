import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
const Login = () => {
  const navigate = useNavigate()
  return (
    <section className="login_container">
      <div className="login_box">
        <div>
          <img src={Logo} />
        </div>
        <div className="landing_content">
          <h1 className="lg">
            Acknowledgement <br />
            <span>Review App</span>
          </h1>
          <br />
          <div className="review_sign">
            <div className="info">Sign In with Microsoft 365 Account</div>
            <Button className="cutsom-btn mt-3 " onClick={()=>navigate('/dashboard')}>Sign In </Button>
          </div>
        </div>
        <div>
          <div className="copy-right">@ 2023CooksandBoardman.com</div>
        </div>
      </div>
    </section>
  );
};

export default Login;
