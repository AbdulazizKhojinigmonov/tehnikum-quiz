import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
// import { AppLable } from "../components/AppLable";
import { Header } from "../components/header";

const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">

           <ProgressBar currentStep = {1}/>
          <div className="question">
          <Header headerType="h2" headerText={"1. Занимательный вопрос"} />
            
            <ul className="variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li>
            </ul>
            <AppButton btnText={"Далее"} isDisabled={true} btnType={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
