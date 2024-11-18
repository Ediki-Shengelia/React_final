import React, { useState } from 'react';
import AppleMacBookAir from '../laptop/AppleMacBookAir.png';
import AppleMacBookPro14 from '../laptop/AppleMacBookPro14.png';
import AppleMacBookPro16 from '../laptop/AppleMacbookPro16.png'; // Ensure this matches the file name

import DellLatitude from '../laptop/DellLatitude.png';
import LenovoLegionPro7 from '../laptop/LenovoLegionPro7.png';
import LenovoLegionSlim5 from '../laptop/LenovoLegionSlim5.png';
import { useNavigate } from 'react-router-dom';
import routes from './const/constants';

const Laptops = () => {
  const [more, setMore] = useState(false);
  const navigate = useNavigate();

  const laptops = [
    {
      id: 1,
      img: AppleMacBookAir,
      name: "Apple MacBook Air",
      price: 1550,
      originalPrice: 1700,
      clickFunc: () => navigate(routes.laptop1),
    },
    {
      id: 2,
      img: AppleMacBookPro14,
      name: 'Apple MacBook Pro 14',
      price: 1450,
      originalPrice: 1550,
      clickFunc: () => navigate(routes.laptop2),
    },
    {
      id: 3,
      img: AppleMacBookPro16,
      name: 'Apple MacBook Pro 16',
      price: 1799,
      originalPrice: 1900,
      clickFunc: () => navigate(routes.laptop3),
    },
    {
      id: 4,
      img: DellLatitude,
      name: "Dell Latitude",
      price: 1250,
      originalPrice: 1400,
      clickFunc: () => navigate(routes.laptop4),
    },
    {
      id: 5,
      img: LenovoLegionPro7,
      name: "Lenovo Legion Pro 7",
      price: 1690,
      originalPrice: 1899,
      clickFunc: () => navigate(routes.laptop5),
    },
    {
      id: 6,
      img: LenovoLegionSlim5,
      name: 'Lenovo Legion Slim 5',
      price: 1499,
      originalPrice: 1699,
      clickFunc: () => navigate(routes.laptop6),
    }
  ];

  const displayedLaptops = more ? laptops : laptops.slice(0, 3);

  return (
    <div style={{ padding: "15px 25px" }}>
      <h2 style={{ color: "yellow", textAlign: "center", fontSize: "35px" }}>
        Laptops
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        {displayedLaptops.map((laptop) => (
          <div
            key={laptop.id}
            onClick={laptop.clickFunc} // Corrected onClick handler
            style={{
              padding: 20,
              backgroundColor: 'aquamarine',
              display: "flex",
              borderRadius: 25,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              cursor: 'pointer', // Makes the cursor look clickable
            }}
          >
            <img
              src={laptop.img}
              style={{ maxWidth: 400, width: "100%" }}
              alt={laptop.name}
            />
            <h2 style={{ fontWeight: "bold" }}>{laptop.name}</h2>
            <div style={{ display: "flex", gap: 10 }}>
              <h3 style={{ color: "orange", fontSize: 25 }}>${laptop.price}</h3>
              <h2
                style={{
                  fontSize: 25,
                  color: "red",
                  fontWeight: "bold",
                  textDecoration: "line-through",
                }}
              >
                ${laptop.originalPrice}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "0 auto",
          color: "white",
          fontSize: 25,
          borderRadius: 25,
          marginTop: 10,
          cursor: "pointer",
          width: "fit-content",
          padding: "15px 40px",
          backgroundColor: "rebeccapurple",
        }}
        onClick={() => setMore(!more)}
      >
        {more ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

export default Laptops;

