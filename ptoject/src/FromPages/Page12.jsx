import React from 'react'
import SamsungGalaxyS24UltraYellow from "../img/SamsungGalaxyS24UltraYellow.png";
const brand='Samsung'
const year=2024
const element='5500 mAh'
const memory1='128 GB'
const memory2='6 GB'
const weight='190 g'
const size='6.65 inches'
const Page12 = () => {
    return (
        <div>
          <h1>Samsung Galaxy S24 Ultra Yellow</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img src={SamsungGalaxyS24UltraYellow} style={{ height: 300, width: 300 }} />
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

export default Page12
