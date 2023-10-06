import React, { useState } from "react";
import Logo from "../assets/images/header-logo.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { useFont } from "../context/FontContext";

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedValue, setSelectedValue] = useState(''); 
  const { setSetFont,setFont } = useFont();
  const handleDropdownSelect = (eventKey) => {
    console.log('eventKey',eventKey);
    setSetFont(`${eventKey === 'small' ? 'small-font' : eventKey === 'medium' ? 'medium-font' : eventKey === 'large' ? 'large-font' : ''}`)
    setSelectedValue(eventKey);
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  console.log('setFont',setFont);
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="cook_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="cook_app_info">
          <div className="cook_switcher">
            <label className="cook_switch">
              <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
              <span className="cook_slider"> </span>
            </label>
          </div>
          <div className="cook_filter">
            <Dropdown onSelect={handleDropdownSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="white" />
                  <path d="M19.0039 9C19.1056 9 19.2049 9.03101 19.2885 9.0889C19.3721 9.14679 19.4361 9.22881 19.4719 9.324L22.4679 17.314C22.4707 17.3209 22.4734 17.3279 22.4759 17.335L23.9719 21.325C23.9978 21.3871 24.0109 21.4537 24.0104 21.5209C24.01 21.5882 23.996 21.6546 23.9692 21.7163C23.9425 21.778 23.9036 21.8337 23.8549 21.88C23.8061 21.9263 23.7485 21.9623 23.6856 21.9859C23.6226 22.0094 23.5555 22.02 23.4883 22.0171C23.4211 22.0141 23.3553 21.9976 23.2946 21.9686C23.234 21.9396 23.1798 21.8986 23.1353 21.8482C23.0909 21.7977 23.057 21.7388 23.0359 21.675L21.6579 18H16.3509L14.9719 21.676C14.9364 21.7703 14.8732 21.8517 14.7907 21.9095C14.7081 21.9672 14.61 21.9987 14.5093 21.9998C14.4085 22.0009 14.3098 21.9715 14.226 21.9155C14.1423 21.8595 14.0774 21.7795 14.0399 21.686L12.9659 19H10.0429L8.96787 21.686C8.9444 21.7483 8.90874 21.8052 8.86298 21.8535C8.81722 21.9018 8.76229 21.9405 8.70139 21.9673C8.64049 21.9941 8.57485 22.0085 8.50832 22.0096C8.4418 22.0107 8.37572 21.9985 8.31396 21.9737C8.2522 21.949 8.19601 21.9122 8.14866 21.8654C8.10132 21.8187 8.06379 21.7629 8.03826 21.7015C8.01274 21.64 7.99973 21.5741 8 21.5076C8.00028 21.441 8.01383 21.3752 8.03987 21.314L9.23587 18.325C9.23837 18.3179 9.24104 18.3109 9.24387 18.304L11.0399 13.814C11.0771 13.7214 11.1411 13.642 11.2238 13.5861C11.3065 13.5302 11.404 13.5003 11.5039 13.5003C11.6037 13.5003 11.7012 13.5302 11.7839 13.5861C11.8666 13.642 11.9307 13.7214 11.9679 13.814L13.7639 18.304C13.767 18.3109 13.77 18.3179 13.7729 18.325L14.4889 20.116L15.5319 17.336C15.5344 17.3286 15.537 17.3213 15.5399 17.314L18.5359 9.324C18.5717 9.22881 18.6356 9.14679 18.7193 9.0889C18.8029 9.03101 18.9022 9 19.0039 9ZM16.7259 17H21.2829L19.0039 10.924L16.7259 17ZM12.5659 18L11.5039 15.346L10.4439 18H12.5669H12.5659Z" fill="#333333" />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item eventKey="small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.27202 8.72923L9.1494 6.25764H12.6787L13.5561 8.72923H14.6641L11.4595 0.00195312H10.3686L7.61293 7.50679L5.92543 2.91104H5.19815L3.64863 7.13102L2.69531 4.36559H1.50639L0 8.72923H0.988636L1.31234 7.7342H2.88787L3.14094 8.51365L3.06179 8.72923H4.19957L4.00293 8.15878L4.38535 7.0815H6.73823L7.24495 8.50893L7.16406 8.72923H8.27202ZM12.3459 5.32014L10.9482 1.38263H10.88L9.48221 5.32014H12.3459ZM2.1179 5.36275L2.65404 7.01403H1.54662L2.08381 5.36275H2.1179ZM5.58452 3.8315L6.51636 6.4565H4.60722L5.53906 3.8315H5.58452Z"
                      fill="#004270"
                    />
                  </svg>
                  <span onClick={(e)=> setSelectedValue("small")}>Small</span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.82812 8.72923L9.54986 6.57724H12.8309L13.554 8.72923H15.2415L12.1648 0.00195312H10.2131L7.5863 7.46329L5.91477 2.91104H5.1875L3.40057 7.77758L2.14773 4.36559H1.60227L0 8.72923H0.553977L0.99267 7.49343H2.75733L3.1248 8.5286L3.05114 8.72923H3.78977L4.3747 7.0815H6.72758L7.22621 8.48613L7.14062 8.72923H8.82812ZM12.4042 5.30735L11.223 1.79173H11.1548L9.97576 5.30735H12.4042ZM1.89205 5.05593L2.59093 7.02468H1.15907L1.85795 5.05593H1.89205ZM5.57386 3.8315L6.50571 6.4565H4.59656L5.52841 3.8315H5.57386Z"
                      fill="#333333"
                    />
                  </svg>
                  <span>Medium</span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.82812 8.72923L9.54986 6.57724H12.8309L13.554 8.72923H15.2415L12.1648 0.00195312H10.2131L7.5863 7.46329L5.91477 2.91104H5.1875L3.40057 7.77758L2.14773 4.36559H1.60227L0 8.72923H0.553977L0.99267 7.49343H2.75733L3.1248 8.5286L3.05114 8.72923H3.78977L4.3747 7.0815H6.72758L7.22621 8.48613L7.14062 8.72923H8.82812ZM12.4042 5.30735L11.223 1.79173H11.1548L9.97576 5.30735H12.4042ZM1.89205 5.05593L2.59093 7.02468H1.15907L1.85795 5.05593H1.89205ZM5.57386 3.8315L6.50571 6.4565H4.59656L5.52841 3.8315H5.57386Z"
                      fill="#333333"
                    />
                  </svg>
                  <span>Large</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="cook_user">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" rx="16" fill="white" />
                <path
                  d="M15.5 14.4182H15.5001C16.3779 14.4173 17.2198 14.0741 17.8409 13.4632C18.4621 12.8523 18.8117 12.0237 18.8123 11.1592V11.1591C18.8123 10.5141 18.6178 9.88372 18.2535 9.34771C17.8892 8.81171 17.3716 8.39422 16.7663 8.14778C16.1611 7.90134 15.4952 7.83693 14.8528 7.96262C14.2104 8.08831 13.6202 8.39852 13.1567 8.85427C12.6933 9.31003 12.3775 9.89089 12.2497 10.5235C12.1218 11.1561 12.1876 11.8117 12.4387 12.4074C12.6898 13.0031 13.1148 13.512 13.6598 13.8698C14.2047 14.2276 14.8451 14.4184 15.5 14.4182ZM11.0471 24.1H19.9529C20.5218 24.1 21.0677 23.8778 21.4705 23.4818C21.8734 23.0857 22.1 22.5482 22.1 21.9873V21.3215C22.1 18.0589 19.1282 15.425 15.5 15.425C11.8718 15.425 8.9 18.0605 8.9 21.3215V21.9873C8.9 22.5482 9.12663 23.0857 9.52948 23.4818C9.93227 23.8778 10.4782 24.1 11.0471 24.1ZM9.91885 21.3231C9.91885 18.6368 12.4098 16.4317 15.5 16.4317C18.5903 16.4317 21.0812 18.6368 21.0812 21.3215V21.9889C21.0812 22.2821 20.9627 22.5637 20.7513 22.7715C20.5398 22.9794 20.2527 23.0965 19.9529 23.0965H11.0471C10.7473 23.0965 10.4602 22.9794 10.2487 22.7715C10.0373 22.5637 9.91885 22.2821 9.91885 21.9889V21.3231ZM14.2244 9.28586C14.6018 9.03803 15.0458 8.90573 15.5 8.90588C16.1086 8.90651 16.6918 9.14451 17.1216 9.56714C17.5514 9.98972 17.7929 10.5623 17.7935 11.1592C17.7936 11.6047 17.6594 12.0403 17.4076 12.411C17.1558 12.7818 16.7975 13.0711 16.3781 13.242C15.9586 13.4129 15.4969 13.4577 15.0515 13.3706C14.606 13.2835 14.1971 13.0686 13.8763 12.7532C13.5555 12.4378 13.3372 12.0361 13.2489 11.5991C13.1605 11.1622 13.2059 10.7092 13.3794 10.2975C13.553 9.88582 13.8469 9.53368 14.2244 9.28586Z"
                  fill="#333333"
                  stroke="#333333"
                  strokeWidth="0.2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;