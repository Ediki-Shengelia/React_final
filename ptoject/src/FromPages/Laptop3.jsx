import React from 'react'
import AppleMacBookPro16 from '../laptop/AppleMacbookPro16.png'; // Ensure this matches the file name
const brand='Apple'
const grapiq='8 Core GPU'
const year=2022
const ram='16 GB'
const memory1='512 GB'
const memory2='SSD'
const system='MacOs'
const Laptop3 = () => {
    return (
        <div>
          <h1>Apple MacBook Pro 16</h1>
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <img
              src={AppleMacBookPro16}
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

export default Laptop3
