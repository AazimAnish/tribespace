import React from "react";
import "./crowdfund.scss";

import EducationImage from "../../assets/images/education.jpg";
import HouseImage from "../../assets/images/house.jpg";
import FoodImage from "../../assets/images/food.jpg";

const Crowdfund = () => {
  return (
    <div className="crowdfund-container">
      <div className="crowdfund-card">
        <img src={EducationImage} alt="Crowdfund Education" className="crowdfund-image" />
        <h3 className="crowdfund-title">Crowdfund Education</h3>
        <p className="crowdfund-description">Fund education for underprivileged children.</p>
        <button className="contribute-button">Contribute</button>
      </div>
      <div className="crowdfund-card">
        <img src={HouseImage} alt="Crowdfund House" className="crowdfund-image" />
        <h3 className="crowdfund-title">Crowdfund House</h3>
        <p className="crowdfund-description">Help build homes for families in need.</p>
        <button className="contribute-button">Contribute</button>
      </div>
      <div className="crowdfund-card">
        <img src={FoodImage} alt="Crowdfund Food" className="crowdfund-image" />
        <h3 className="crowdfund-title">Crowdfund Food</h3>
        <p className="crowdfund-description">Provide food to the homeless and needy.</p>
        <button className="contribute-button">Contribute</button>
      </div>
    </div>
  );
};

export default Crowdfund;
