import React from "react";

export const AnswerItem = ({AnswerText , id , answerValue , answerChange}) => {
    return (
        <li className="variant-wrapper">
        <input 
            required 
            type="radio" 
            name="variant-1" 
            id= {id} 
            value = {answerValue} 
            onChange = {answerChange} />
        <label htmlFor={id}>{AnswerText}</label>
        </li> 
    );

};
