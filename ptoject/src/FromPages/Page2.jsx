import React from 'react'
import iphone11 from "../img/iphone11.png";
const brand='Apple'
const year=2020
const element='3110 mAh'
const memory1='64 GB'
const memory2='4 GB'
const weight='194 g'
const size='6.1 inches'
const Page2 = () => {
    return (
        <div>
          <h1>Iphone 11</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img src={iphone11} style={{ height: 300, width: 300 }} />
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

export default Page2
