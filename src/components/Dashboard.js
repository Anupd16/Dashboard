import React from "react";
import DashboardStatesGrid from "./DashboardStatesGrid";
import Transactionbox from "./Transactionbox";
import BuyProfile from "./BuyProfilet";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatesGrid />
      <div className="flex flex-row gap-4 w-full">
        <Transactionbox />
        <BuyProfile />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
