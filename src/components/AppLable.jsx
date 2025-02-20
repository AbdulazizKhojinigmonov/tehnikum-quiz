import React from 'react'

export const AppLable = ({labelText,labelPlaceHolder,errorText,labelId ,labelValue, labelChange , isError}) => {
    return (
        <label className={`input-wrapper ${isError && "_error"}`} htmlFor={labelId}>
        {labelText}
        <input
          required
          type="text"
          name={labelId}
          id={labelId}
          placeholder={labelPlaceHolder}
          value = {labelValue}
          onChange={(e)=>labelChange(e.target.value)}
          
        />
      {isError && <span id="error-message">{errorText}</span>}
      </label>
    )
}