import React from "react";
import routes from "../../constants/routeBox";
import { useNavigate } from "react-router-dom";

const appRoutes = Object.entries(routes);
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      {appRoutes.map((element) => {
        const [key, value] = element;
        return (
          <button
            style={{
              backgroundColor: "rebeccapurple",
              color: "white",
              margin: "0 5px",
              cursor: "pointer",
              padding: "5px 15px",
              fontSize: 17,
            }}
            key={key}
            onClick={() => navigate(value)}
          >
            {key}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
