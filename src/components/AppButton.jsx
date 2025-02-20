import React from "react";

export const AppButton= ({btnText,isDisabled,btnType,btnClick}) => {
    return(
        <button disabled={isDisabled} type={btnType} id="next-btn" onClick ={btnClick}>
        {btnText}
      </button>
    )
} 
