import React from 'react'
import AppleMacBookAir from '../laptop/AppleMacBookAir.png';

const brand='Apple'
const grapiq='8 Core GPU'
const year=2024
const ram='8 GB'
const memory1='256 GB'
const memory2='SSD'
const system='MacOs'
const Laptop = () => {
    return (
        <div>
          <h1>Apple MacBook Air</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img
              src={AppleMacBookAir}
              style={{ height: 300, width: 300 }}
            />
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
}

export default Laptop
