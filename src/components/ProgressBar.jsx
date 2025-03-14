import React from "react";

export const ProgressBar = ({ currentStep  }) => {
    const variant = [1, 2, 3, 4];
    return (
        <div className="indicator">
            <div className="indicator__text">
                <span className="indicator__description">
                    Скидка за прохождение опроса:
                </span>
                <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
                {variant.map((elem, indx) => (
                    <div
                        key={indx}
                        className={`indicator__unit indicator__unit-${elem} ${
                            currentStep > indx && "_active" 
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
