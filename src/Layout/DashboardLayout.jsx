import React from "react";
import LogoImg from "../logo.png";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav__logo">
          <img src={LogoImg} className="mobile-nav__img" alt="homebox logo" />
        </div>
        
        <div>
          <input
            type="checkbox"
            name=""
            id="navi-toggle"
            class="mobile-nav__checkbox"
          />
          <label
            htmlFor="navi-toggle"
            onClick={toggle}
            className="mobile-nav__button"
          >
            <span className="mobile-nav__menu">&nbsp;</span>
          </label>
        </div>
      </div>
      <div
        className={`mobile-sidebar`}
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <Sidebar />
      </div>
      <div className="section-dashboard">
        <div className="navigation">
          <Sidebar isOpen={true} />
        </div>
        <div className="section-main" {...props}></div>
      </div>
    </>
  );
}
