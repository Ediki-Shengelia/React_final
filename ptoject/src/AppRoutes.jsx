import React from "react";
import { Route, Routes } from "react-router-dom";
import appRoutes from "./config/routes";
const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((el) => {
        if (el.Guard) {
          return (
            <Route
              key={el.path}
              path={el.path}
              element={<el.Guard>{<el.component />}</el.Guard>}
            />
          );
        }
        return (
          <Route key={el.path} path={el.path} element={<el.component />} />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
