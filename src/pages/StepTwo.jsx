import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
// import { AppLable } from "../components/AppLable";
import { Header } from "../components/header";
import { AnswerItem } from "../components/AnswerItem";

const StepTwo = () => {
const course = [
 { id : "variant-1",
  value : "React"
 },
 { id : "variant-2",
  value : "Python"
 },
 { id : "variant-3",
  value : "Data Analytic"
 },
 { id : "variant-4",
  value : "UX/UI"
 }

]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
           <ProgressBar currentStep = {1}/>
          <div className="question">
          <Header headerType="h2" headerText={"choose cource"} />
            <ul className="variants">
              {course.map((elem,indx) =>(
                 <AnswerItem AnswerItem={elem.value} answerValue={elem.value} id={elem.id} key={elem.id} />
              ))}
            </ul>
            <AppButton btnText={"Далее"} isDisabled={true} btnType={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
