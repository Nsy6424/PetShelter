import React from "react";
import clsx from "clsx"; // Import clsx

interface DashboardCardProps {
  title: string;
  value: string | number;
  color: string;
  percentage: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  color,
  percentage,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <div className="text-gray-600 font-semibold">{title}</div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-xl font-bold">{value}</div>
        <div className={clsx("w-16 h-2 rounded", `bg-${color}-500`)}></div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className={clsx("h-2 rounded", `bg-${color}-500`)}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
