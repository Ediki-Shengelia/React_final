import XiaomiRedmiNote13Black from "../img/XiaomiRedmiNote13Black.png";
import React from 'react'
const brand='Xiaomi'
const year=2020
const element='6000 mAh'
const memory1='128 GB'
const memory2='6 GB'
const weight='190 g'
const size='6.65 inches'
const Page11 = () => {
    return (
        <div>
          <h1>Xiaomi Redmi Note 13</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img src={XiaomiRedmiNote13Black} style={{ height: 300, width: 300 }} />
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
}

export default Page11
