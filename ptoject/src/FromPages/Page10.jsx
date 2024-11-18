import React from 'react'
import XiaomiPocoX6Pro5G from "../img/XiaomiPocoX6Pro5G.png";

const brand='Xiaomi'
const year=2020
const element='3800 mAh'
const memory1='64 GB'
const memory2='4 GB'
const weight='167 g'
const size='6.1 inches'
const Page10 = () => {
    return (
        <div>
          <h1>Xiaomi Poco X6 Pro</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img src={XiaomiPocoX6Pro5G} style={{ height: 300, width: 300 }} />
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

export default Page10
