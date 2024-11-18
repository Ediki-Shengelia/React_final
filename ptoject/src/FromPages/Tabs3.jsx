import React from "react";
import MicrosoftSurfacePro9 from "../tabs/MicrosoftSurfacePro9.png";
const brand = "Microsoft";
const year = 2022;
const size = "10.9 inches";
const element = "7000 mAh";
const weight = "879 g";
const memory1 = "128 GB";
const memory2 = "4 GB";
const Tabs3 = () => {
  return (
    <div>
      <h1>Microsoft Surface Pro 9</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <img
          src={MicrosoftSurfacePro9}
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

export default Tabs3;
