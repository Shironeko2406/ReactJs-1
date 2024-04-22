import React, { useState } from "react";
import BlackCar from "../assets/img/imgBlackCar.jpg"
import RedCar from "../assets/img/imgRedCar.jpg"
import Silver from "../assets/img/imgSilverCar.jpg"

const ChangeCarColor = () => {

  const [CarColor, setCarColor] = useState(BlackCar)



  return (
    <div classname="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={CarColor}
            alt="Xe hơi màu trắng"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>Chọn màu xe</h1>
          <div className="btn-group">
            <button className="btn btn-dark" data-color="Black" onClick={() => {setCarColor(BlackCar)}}>
              Black
            </button>
            <button className="btn btn-secondary" data-color="silver" onClick={() => {setCarColor(Silver)}}>
              Bạc
            </button>
            <button className="btn btn-danger" data-color="Red" onClick={() =>{setCarColor(RedCar)}}>
              Red
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeCarColor;
