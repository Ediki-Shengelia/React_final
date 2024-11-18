import React, { useState } from "react"; // Add useState import
import AppleipadAir5thGeneration from '../tabs/AppleiPadAir5thGeneration.png';
import AppleipadPro11 from '../tabs/AppleiPadPro11.png';
import MicrosoftSurfacePro9 from '../tabs/MicrosoftSurfacePro9.png';
import SamsungSMX716GalaxyTabS9 from '../tabs/SamsungSMX716GalaxyTabS9.png';
import { useNavigate } from "react-router-dom";
import routes from './const/constants'

const Tabs = () => {
  const [more, setMore] = useState(false);
const navigate=useNavigate()
  // List of tablet data
  const phones = [
    {
      id: 1,
      img: AppleipadAir5thGeneration,
      name: "Apple ipad Air 5th Generation",
      price: 1499,
      originalPrice: 1540,
      clickFunc:()=>navigate(routes.tabs1)
    },
    {
      id: 2,
      img: AppleipadPro11,
      name: 'Apple ipad Pro 11',
      price: 1430, // Fixed typo here
      originalPrice: 1499,
      clickFunc:()=>navigate(routes.tabs2)
    },
    {
      id: 3,
      img: MicrosoftSurfacePro9,
      name: 'Microsoft Surface Pro 9',
      price: 1299,
      originalPrice: 1370,
      clickFunc:()=>navigate(routes.tabs3)
    },
    {
      id: 4,
      img: SamsungSMX716GalaxyTabS9,
      name: 'Samsung SMX 716 Galaxy Tab S9',
      price: 1440,
      originalPrice: 1530,
      clickFunc:()=>navigate(routes.tabs4)
    },
  ];

  // Only show first 2 items unless 'more' is true
  const displayedPhones = more ? phones : phones.slice(0, 2);

  return (
    <div style={{ padding: "15px 25px" }}>
      <h2 style={{ color: 'rebeccapurple', textAlign: "center", fontSize: "35px" }}>
        Tabs
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
              backgroundColor:'wheat',
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
              style={{  width: "90%" }}
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

export default Tabs;
