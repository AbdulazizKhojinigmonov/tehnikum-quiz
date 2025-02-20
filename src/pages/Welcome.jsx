import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [errorName, seterrorName] = useState(false);
  const [errorPhone, seterrorPhone] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ]+$/
  const RegexPhone = /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/


const handClick = () =>{
  console.log(true);
  
   if (!RegexUser) {
    seterrorName(true)
   }  if (!RegexPhone) {
    seterrorPhone(true)
   } if (RegexUser.test(userName) && RegexPhone.test(userPhone) ) {
    seterrorName(false)
    seterrorPhone(false)
   }
}

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
              labelValue={userName}
              labelChange={setUserName}
              isError={errorName}
            />
            <AppLable
              labelText={"Ваш номер"}
              labelType={"tel"}
              labelId={"phone"}
              labelPlaceholder="+998 9- --- -- -- "
              labelPattern={"^(?:+998)?(?:d{2})?(?:d{7})$"}
              errorText={"Введите номер в правильном формате"}
              labelValue={userPhone}
              labelChange={setUserPhone}
              isError={errorPhone}

            />
            <AppButton
              btnText={"Далее"}
              isDisabled={false}
              btnType="button"
              btnClick={()=>handClick()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
