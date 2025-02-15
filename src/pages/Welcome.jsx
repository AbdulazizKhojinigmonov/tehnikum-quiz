import React , { useEffect, userState} from "react";
import {Header} from "../components/header";
import {AppButton} from "../components/AppButton"
import { AppLable } from "../components/AppLable";

  const Welcome = () => {
  const [ userName , setUserName] = userState ("");
  const [userPhone , setUserPhone] = userState("");
  const [isDisabled, setIsDiabled] = userState(true)
  useEffect(()=> {
    if (userName && userPhone) {
      setIsDiabled(false)
    }else{   
      setIsDiabled(true)
    }
  } ,[userName,userPhone])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h2" headerText = "hello"/>
          <form className="welcom__form">
           <AppLable  labelText= "Your name" labelPlaceHolder = "Name" errorText = "write correctly!" labelId="username" labelValue={userName} 
            labelChange={()=> setUserName}/>
           <AppLable labelPlaceHolder = "+998 (..) " errorText = "write correctly!" labelId="phone" labelText="your number" labelValue={userPhone}
           labelChange={()=> setUserPhone} />
           <AppButton btnText = "next" isDisabled={true} btnType="submit" />
           </form>
          </div>
      </div>
    </div>       
   
  );
};


export default Welcome;