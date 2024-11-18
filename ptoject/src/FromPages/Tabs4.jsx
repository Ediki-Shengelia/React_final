import React from "react";
import SamsungSMX716GalaxyTabS9 from "../tabs/SamsungSMX716GalaxyTabS9.png";

const brand = "Samsung";
const year = 2022;
const size = "12 inches";
const element = "7891 mAh";
const weight = "512 g";
const memory1 = "256 GB";
const memory2 = "8 GB";
const Tabs4 = () => {
  return (
    <div>
      <h1>Samsung SMX 716 Galaxy Tab S9</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <img
          src={SamsungSMX716GalaxyTabS9}
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

export default Tabs4;
