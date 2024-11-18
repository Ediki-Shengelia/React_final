import SamsungGalaxyS24UltraGray from "../img/SamsungGalaxyS24UltraGray.png";
import React from 'react'
const brand='Samsung'
const year=2024
const element='5500 mAh'
const memory1='128 GB'
const memory2='8 GB'
const weight='197 g'
const size='6.5 inches'
const Page8 = () => {
    return (
        <div>
          <h1>Samsung Galaxy S24 Ultra</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img src={SamsungGalaxyS24UltraGray} style={{ height: 300, width: 300 }} />
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

export default Page8
