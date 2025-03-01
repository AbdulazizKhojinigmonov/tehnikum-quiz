import React from "react";
import { Header } from "../components/header";

const Thanks = () => {
  const { name , phone, points , selectCourse, userAboutUs, userCharacter} = JSON.parse(localStorage.getItem("user"))
 
  const value = [
    {
      text: "Name :" ,
      userResponse : name ,
    },
    {
      text: "Phone Number :" ,
      userResponse : phone ,
    },
    {
      text: "Where did you get info :" ,
      userResponse : userAboutUs ,
    },
    {
      text: "Which course :" ,
      userResponse : selectCourse ,
    },
    {
      text: "Who are you :" ,
      userResponse : userCharacter ,
    },
    {
      text: "School Rate" ,
      userResponse : points ,
    },
  ]
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header headerText={"Спасибо за прохождение опроса!"} headerType={"h3"}/>
          <div>
            
          </div>
          {value.map((elem) => (
            <div className="info">
            <span>{elem.text} </span>
            <span>{elem.userResponse}</span>
          </div>
          ))}
        
          
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
