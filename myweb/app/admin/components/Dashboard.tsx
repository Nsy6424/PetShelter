import React from "react";
import DashboardCard from "./DashboardCard";
import Barchart from "./UserChart";

const Dashboard: React.FC = () => {
  return (
    <div className="ml-10 mt-5">
      <div className="flex justify-around space-y-6 space-x-8">
        <DashboardCard
          title="Page Views"
          value="13K"
          color="blue"
          percentage={80}
        />
        <DashboardCard
          title="Product Sold"
          value="1,890"
          color="green"
          percentage={60}
        />
        <DashboardCard
          title="Rescue animals"
          value="44%"
          color="blue"
          percentage={44}
        />
      </div>

      <div className="flex space-y-6 w-full h-90 mt-5">
        <Barchart></Barchart>
      </div>
    </div>
  );
};

export default Dashboard;
