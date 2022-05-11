import React from "react";

const ExchangeRate = ({exchangeData}) => {
    return (
        <div className="exchange">
            <h3>ExchangeRate</h3>
            <h1>{exchangeData.exchangeRate}</h1>
            <p>{exchangeData.primaryCurrency} to {exchangeData.secondaryCurrency}</p>
        </div>
    );
}

export default ExchangeRate;
