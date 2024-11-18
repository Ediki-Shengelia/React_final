import React from 'react'
import Xiaomi13T from '../img/Xiaomi13T.png'
const brand='Xiaomi'
const year=2024
const element='5000 mAh'
const memory1='256 GB'
const memory2='8 GB'
const weight='197 g'
const size='6.67 inches'

const Page7 = () => {
    return (
        <div>
          <h1>Xiaomi 13 T</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img src={Xiaomi13T} style={{ height: 300, width: 300 }} />
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

export default Page7
