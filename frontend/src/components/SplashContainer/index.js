import React from 'react';
import './SplashContainer.css';
import theEnterprise from "../../images/enterprise.png";

function SplashContainer({ children }) {

  return (
    <>
      <div className="splash-container">
        <div className="enterprise-container">
          <img src={theEnterprise} alt="The Enterprise"></img>
        </div>
        <div className="splash-content">
          {children}
        </div>
      </div>
    </>

  )
}

export default SplashContainer;
