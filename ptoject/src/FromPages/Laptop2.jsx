import React from "react";
import AppleMacBookPro14 from "../laptop/AppleMacBookPro14.png";

const brand = "Apple";
const grapiq = "8 Core GPU";
const year = 2023
const ram = "16 GB";
const memory1 = "512 GB";
const memory2 = "SSD";
const system = "MacOs";
const Laptop2 = () => {
  return (
    <div>
      <h1>Apple MacBook Pro 14</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <img src={AppleMacBookPro14} style={{ height: 300, width: 300 }} />
      </div>
      <div style={{ margin: "0 auto", marginTop: 30 }}>
        <h2>{`ბრენდი: ${brand}`}</h2>
        <h3>{`გამოშვების თარიღი: ${year}`}</h3>
        <h4>{`Graphics processor: ${grapiq}`}</h4>
        <h4>{`RAM: ${ram}`}</h4>
        <h4>{`Internal memory: ${memory1}`}</h4>
        <h4>{`Internal Memory Type: ${memory2}`}</h4>
        <h4>{`Operating system: ${system}`}</h4>
      </div>
    </div>
  );
};

export default Laptop2;
