import React from 'react'
import LenovoLegionSlim5 from '../laptop/LenovoLegionSlim5.png';
const brand='Lenovo'
const grapiq='Nvidia GeForce RTX 4060'
const year=2024
const ram='8 GB'
const memory1='256 GB'
const memory2='SSD'

const Laptop6 = () => {
    return (
        <div>
          <h1>Lenovo Legion Slim 5</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img
              src={LenovoLegionSlim5}
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

export default Laptop6
