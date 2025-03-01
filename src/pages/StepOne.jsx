import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const regexAnswer = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (!regexAnswer.test(userAnswer)) {
      alert("Введите ответ в правильном формате.");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, answer: userAnswer })
      );
    } else {
      localStorage.setItem("user", JSON.stringify({ answer: userAnswer }));
    }
    navigate("/step-two");
  };

  useEffect(() => {
    if (userAnswer) {
      setIsDisabled(false);
    } else {
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
            <ProgressBar currentStep={1} />
          </div>
          <div className="question">
            <Header headerType="h2" headerText=" Where did you get info ? " />
            <AppLable
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              errorText=" Введите номер в правильном формате например"
              lableValue={userAnswer}
              labelChange={setUserAnswer}
            />
            <AppButton
              btnText={"Далее"}
              isDisabled={isDisabled}
              btnType={"button"}
              btnClick={handleNextStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;