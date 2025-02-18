import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userName && userPhone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userName, userPhone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
           headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLable
              labelText={"Ваше имя"}
              labelType={"text"}
              labelId={"username"}
              labelPlaceholder={"Ваш ответ"}
              errorText={"Введите имя корректно"}
              lableValue={userName}
              lableChange={setUserName}
            />
            <AppLable
              labelText={"Ваш номер"}
              labelType={"tel"}
              labelId={"phone"}
              labelPlaceholder={"+998 9- --- -- -- "}
              labelPattern={"^(?:+998)?(?:d{2})?(?:d{7})$"}
              errorText={"Введите номер в правильном формате"}
              lableValue={userPhone}
              lableChange={setUserPhone}
            />
            <AppButton
              btnText={"Далее"}
              isDisabled={isDisabled}
              btnType={"submit"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
