import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
const StepThree = () => {
  const navigate = useNavigate()
  const [isDisabled,setIsDisabled] = useState(null);
  const handleClick = (event) => {
    setIsDisabled(event.target.id);
  };
  const buttonNextClick = () => {
    if (isDisabled){
      navigate("/step-four")
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4}/>
          <div className="question">
          <Header headerType="h2" headerText={"Какой вы по характеру человек"} />
           
            <ul className="emoji-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" onClick={handleClick} />
                <label htmlFor="variant-1">
                  <img src="./img/laugh.png" alt="laugh" />
                  <p>Веселый</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" onClick={handleClick} />
                <label htmlFor="variant-2">
                  <img src="./img/hearts.png" alt="hearts" />
                  <p>Влюбчивый</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" onClick={handleClick} />
                <label htmlFor="variant-3">
                  <img src="./img/smirk.png" alt="smirk" />
                  <p>Харизматичный</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" onClick={handleClick} />
                <label htmlFor="variant-4">
                  <img src="./img/fright.png" alt="fright" />
                  <p>Взволнованный</p>
                </label>
              </li>
            </ul>
            <AppButton btnText="next" btnClick={buttonNextClick} isDisabled={!isDisabled}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
