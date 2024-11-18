import React from 'react'
import DellLatitude from '../laptop/DellLatitude.png';
const brand='Dell'
const grapiq='8 Core GPU'
const year=2024
const ram='16 GB'
const memory1='512 GB'
const memory2='SSD'

const Laptop4 = () => {
    return (
        <div>
          <h1>Dell Latitude</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img
              src={DellLatitude}
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

export default Laptop4
