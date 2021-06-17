import React from "react";
import LogoImg from "../../logo.png";

export default function Sidebar() {
  return (
    <div>
      <div className="navigation__logo">
        <img src={LogoImg} alt="hombox logo" />
      </div>

      <div className="navigation__box ">
        <ul className="navigation__list">
          <li className="navigation__item navigation__item--dashboard">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon"></div>
              Dashboard
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon"></div>
              All Customers
            </a>
          </li>
          <li className="navigation__item navigation__item--active">
            <a href="#dashboard" className="navigation__link">
              {" "}
              <div className="navigation__icon"></div> 
              All Subscriptions
            </a>
          </li>

          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon"></div>
              Transactions
            </a>
          </li>

          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon"></div>
              Contact
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon"></div>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
