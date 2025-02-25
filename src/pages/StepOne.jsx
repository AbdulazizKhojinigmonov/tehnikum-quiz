import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {

const[userAnswer, setUserAnswer] = useState("");
const [isDisabled, setIsDisabled] = useState(true);

useEffect(()=>{
  if (userAnswer){
    setIsDisabled(false);
  }else{
    setIsDisabled(true);
  }
}, [userAnswer]);


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
            <ProgressBar currentStep = {1}/>
          </div>
          <div className="question">
            <Header headerType="h2" headerText={" nimagGAP"} />
            <AppLable
              labelId={"answer"}
              labelPlaceholder={"Ваш ответ"}
              errorText={" Введите номер в правильном формате например"}
              lableValue={userAnswer}
              lableChange={setUserAnswer}
            />
            <AppButton btnText={"Далее"} isDisabled={isDisabled} btnType={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
