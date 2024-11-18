import React, { useState } from "react";
import {Route, Routes, useNavigate} from 'react-router-dom'
import GooglePixel8Black from "../img/GooglePixel8Black.png";
import iphone11 from "../img/iphone11.png";
import iphone12 from "../img/iphone12.png";
import iphone12purple from "../img/iphone12purple.png";
import iphone14red from "../img/iphone14red.png";
import iphone14yellow from "../img/iphone14yellow.png";
import SamsungGalaxyS24UltraGray from "../img/SamsungGalaxyS24UltraGray.png";
import Xiaomi13T from "../img/Xiaomi13T.png";
import Xiaomi14 from "../img/Xiaomi14.png";
import XiaomiPocoX6Pro5G from "../img/XiaomiPocoX6Pro5G.png";
import XiaomiRedmiNote13Black from "../img/XiaomiRedmiNote13Black.png";
import SamsungGalaxyS24UltraYellow from "../img/SamsungGalaxyS24UltraYellow.png";
//
import routes from './const/constants'

const MainPage = () => {
  const [more, setMore] = useState(false);
const navigate=useNavigate()
  const phones = [
    {
      id: 1,
      img: GooglePixel8Black,
      name: "Google Pixel 8 Black",
      price: 1000,
      originalPrice: 1100,
      clickFunc:()=>navigate(routes.page1)
    },
    {
      id: 2,
      img: iphone11,
      name: "iPhone 11",
      price: 1100,
      originalPrice: 1240,
      clickFunc:()=>navigate(routes.page2)
    },
    {
      id: 3,
      img: iphone12,
      name: "iPhone 12",
      price: 1150,
      originalPrice: 1270,
      clickFunc:()=>navigate(routes.page3)
    },
    {
      id: 4,
      img: iphone12purple,
      name: "iPhone 12 Purple",
      price: 1100,
      originalPrice: 1240,
      clickFunc:()=>navigate(routes.page4)
    },
    {
      id: 5,
      img: iphone14red,
      name: "iPhone 14 Red",
      price: 1300,
      originalPrice: 1340,
      clickFunc:()=>navigate(routes.page5)
    },
    {
      id: 6,
      img: iphone14yellow,
      name: "iPhone 14 Yellow",
      price: 1300,
      originalPrice: 1340,
      clickFunc:()=>navigate(routes.page6)
    },
    {
      id: 7,
      img: Xiaomi13T,
      name: "Xiaomi 13T",
      price: 600,
      originalPrice: 740,
      clickFunc:()=>navigate(routes.page7)
    },
    {
      id: 8,
      img: SamsungGalaxyS24UltraGray,
      name: "Samsung Galaxy S24 Ultra",
      price: 1400,
      originalPrice: 1540,
      clickFunc:()=>navigate(routes.page8)
    },
    {
      id: 9,
      img: Xiaomi14,
      name: "Xiaomi 14",
      price: 940,
      originalPrice: 1140,
      clickFunc:()=>navigate(routes.page9)
    },
    {
      id: 10,
      img: XiaomiPocoX6Pro5G,
      name: "Xiaomi Poco X6 Pro",
      price: 830,
      originalPrice: 980,
      clickFunc:()=>navigate(routes.page10)
    },
    {
      id: 11,
      img: XiaomiRedmiNote13Black,
      name: "Xiaomi Redmi Note 13",
      price: 980,
      originalPrice: 1120,
      clickFunc:()=>navigate(routes.page11)
    },
    {
      id: 12,
      img: SamsungGalaxyS24UltraYellow,
      name: "Samsung Galaxy S24",
      price: 1150,
      originalPrice: 1350,
      clickFunc:()=>navigate(routes.page12)
    },
    
  ];


  const displayedPhones = more ? phones : phones.slice(0, 4);

  return (
    <div style={{ padding: "15px 25px" }}>
      <h2 style={{ color: "red", textAlign: "center", fontSize: "35px" }}>
        Phones
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        {displayedPhones.map((phone) => (
          <div
          onClick={phone.clickFunc}
            key={phone.id}
            style={{
              padding: 20,
              backgroundColor: "gray",
              display: "flex",
              borderRadius: 25,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={phone.img}
              style={{ maxWidth: 300, width: "100%", height: 300 }}
              alt={phone.name}
            />
            <h2 style={{ fontWeight: "bold" }}>{phone.name}</h2>
            <div style={{ display: "flex", gap: 10 }}>
              <h3 style={{ color: "orange", fontSize: 25 }}>${phone.price}</h3>
              <h2
                style={{
                  fontSize: 25,
                  color: "red",
                  fontWeight: "bold",
                  textDecoration: "line-through",
                }}
              >
                ${phone.originalPrice}
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

export default MainPage;
