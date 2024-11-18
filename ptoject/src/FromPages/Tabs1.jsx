import React from "react";
import AppleipadAir5thGeneration from '../tabs/AppleiPadAir5thGeneration.png';
const brand='Apple'
const year=2024
const size='10.9 inches'
const element='8827 mAh'
const weight='461 g'
const memory1='64 GB'
const memory2='4 GB'
const Tabs1 = () => {
  return (
    <div>
      <h1>Apple ipad Air 5th Generation</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <img src={AppleipadAir5thGeneration} style={{ height: 300, width: 300 }} />
      </div>
      <div style={{margin:'0 auto',marginTop:30}}>
        <h2>{`ბრენდი: ${brand}`}</h2>
        <h3>{`გამოშვების თარიღი: ${year}`}</h3>
        <h4>{`ეკრანის ზომა: ${size}`}</h4>
        <h4>{`ელემენტი: ${element}`}</h4>
        <h4>{`შიდა მეხსიერება: ${memory1}`}</h4>
        <h4>{`ოპერატიული მეხსიერება: ${memory2}`}</h4>

        <h4>{`წონა: ${weight}`}</h4>
      </div>
    </div>
  );
};

export default Tabs1;
