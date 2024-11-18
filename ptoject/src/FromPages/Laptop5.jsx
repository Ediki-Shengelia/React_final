import React from 'react'
import LenovoLegionPro7 from '../laptop/LenovoLegionPro7.png';
const brand='Lenovo'
const grapiq='NVIDIA GeForce RTX4080'
const year=2022
const ram='32 GB'
const memory1='1 TB'
const memory2='SSD'

const Laptop5 = () => {
    return (
        <div>
          <h1>Lenovo Legion Pro 7</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img
              src={LenovoLegionPro7}
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
            
          </div>
        </div>
      );
}

export default Laptop5
