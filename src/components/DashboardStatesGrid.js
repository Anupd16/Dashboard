import React from "react";
import { IoBagHandle } from "react-icons/io5";

const DashboardStatesGrid = () => {
  // Define an array of data to dynamically render the boxes
  const dashboardStats = [
    {
      label: "Total Sales",
      amount: "$34525.68",
      count: "234",
      icon: <IoBagHandle className="text-2xl text-white" />,
    },
    {
      label: "Total Sales",
      amount: "$44525.68",
      count: "123",
      icon: <IoBagHandle className="text-2xl text-white" />,
    },
    {
      label: "Total Sales",
      amount: "$64525.68",
      count: "321",
      icon: <IoBagHandle className="text-2xl text-white" />,
    },
    {
      label: "Total Sales",
      amount: "$74525.68",
      count: "456",
      icon: <IoBagHandle className="text-2xl text-white" />,
    },
  ];

  const BoxWrapper = ({ children }) => {
    return (
      <div className="bg-white rounded-sm p-3 mt-2 flex-1 border border-gray-200 flex items-center">
        {children}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-3 w-full">
      {dashboardStats.map((stat, index) => (
        <BoxWrapper key={index}>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            {stat.icon}
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              {stat.label}
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {stat.amount}
              </strong>
              <span className="text-sm text-green-500 pl-2">{stat.count}</span>
            </div>
          </div>
        </BoxWrapper>
      ))}
    </div>
  );
};

export default DashboardStatesGrid;
