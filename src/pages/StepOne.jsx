import React from "react";
import { Header } from "../components/header";
import { AppLable } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Header text = "Question"/>
            <AppLable labelText = "hello" labelPlaceHolder = "your answer "errorText = "write telephone number" labelId ="answer"/>
            <AppButton tnText = "next" isDisabled={true} btnType="submit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
