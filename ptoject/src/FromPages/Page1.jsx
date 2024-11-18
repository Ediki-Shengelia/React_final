import React from "react";
import GooglePixel8Black from "../img/GooglePixel8Black.png";
const brand='Google'
const year=2024
const element='4500 mAh'
const memory1='128 GB'
const memory2='8 GB'
const weight='187 g'
const size='6.2 inches'
const Page1 = () => {
  return (
    <div>
      <h1>Google Pixel 8 Black</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <img src={GooglePixel8Black} style={{ height: 300, width: 300 }} />
      </div>

      <div  style={{margin:'0 auto',marginTop:30}}>
        <h2>{`ბრენდი: ${brand}`}</h2>
        <h3>{`გამოშვების თარიღი: ${year}`}</h3>
        <h4>{`ელემენტი: ${element}`}</h4>
        <h4>{`ეკრანის ზომა: ${size}`}</h4>
        <h4>{`შიდა მეხსიერება: ${memory1}`}</h4>
        <h4>{`ოპერატიული მეხსიერება: ${memory2}`}</h4>
        <h4>{`წონა: ${weight}`}</h4>
      </div>
    </div>
  );
};

export default Page1;
