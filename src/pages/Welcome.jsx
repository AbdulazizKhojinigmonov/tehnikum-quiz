import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  const RegexPhone =
    /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const navigate = useNavigate();

  const handleClick = () => {
    if (!RegexUser.test(userName)) {
      setErrorName(true);
    }
    if (!RegexPhone.test(userPhone)) {
      setErrorPhone(true);
    }
    if (RegexUser.test(userName) && RegexPhone.test(userPhone)) {
      setErrorName(false);
      setErrorPhone(false);
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, name: userName, phone: userPhone })
        );
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({ name: userName, phone: userPhone })
        );
      }
      navigate("/step-one");
    }
  };

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
          <Header headerText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <AppLable
              labelText="Ваше имя"
              labelPlaceholder="Имя"
              errorText="Введите имя в правильном формате например"
              labelId="username"
              labelType="text"
              labelValue={userName}
              labelChange={setUserName}
              isError={errorName}
            />
            <AppLable
              labelText="Ваш номер"
              labelPlaceholder="+998 9- --- -- -- "
              errorText="Введите номер в правильном формате например"
              labelId="phone"
              labelType="tel"
              labelPattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              labelValue={userPhone}
              labelChange={setUserPhone}
              isError={errorPhone}
            />
            <AppButton
              BtnText="Next"
              isDisabled={isDisabled}
              btnType="button"
              btnClick={() => handleClick()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
