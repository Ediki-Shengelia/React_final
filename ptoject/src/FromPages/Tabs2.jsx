import React from "react";
import AppleipadPro11 from "../tabs/AppleiPadPro11.png";
const brand = "Apple";
const year = 2024;
const size = "11 inches";
const element = "8160 mAh";
const weight = "444 g";
const memory1 = "256 GB";
const memory2 = "8 GB";
const Tabs2 = () => {
  return (
    <div>
      <h1>Apple ipad Pro 11</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <img
          src={AppleipadPro11}
          style={{ height: 300, width: 300 }}
        />
      </div>
      <div style={{ margin: "0 auto", marginTop: 30 }}>
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

export default Tabs2;
