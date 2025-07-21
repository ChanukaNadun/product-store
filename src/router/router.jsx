import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout";
import Home from "../pages/Home"; 

function Router() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* <Route
              path="menu"
              element={
                <div className="fade-in">
                  <Menu />
                </div>
              }
            />
            <Route path="onlineOrders" element={<MyOrders />} /> */}
            
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default Router;
