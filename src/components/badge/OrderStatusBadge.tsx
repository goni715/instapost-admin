import { TOrderStatus } from "@/types/order.type";
import { JSX } from "react";
import { FaClock, FaCalendarAlt, FaUserCheck } from "react-icons/fa"; // Example icons

// Styles with hover only for active statuses
const STATUS_STYLE: Record<string, string> = {
  Pending:
    "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition transform duration-150 cursor-pointer",
  Scheduled:
    "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition transform duration-150 cursor-pointer",
  Assigned:
    "bg-purple-500 text-white hover:bg-purple-600 hover:scale-105 transition transform duration-150 cursor-pointer",
  Completed: "bg-green-500 text-white", // Static
  Canceled: "bg-red-500 text-white", // Static
};

// Map status to icons (skip Completed & Canceled)
const STATUS_ICON: Record<string, JSX.Element | null> = {
  Pending: <FaClock className="mr-1 inline" />,
  Scheduled: <FaCalendarAlt className="mr-1 inline" />,
  Assigned: <FaUserCheck className="mr-1 inline" />,
  Completed: null,
  Canceled: null,
};

const OrderStatusBadge = ({ status }: { status: TOrderStatus }) => {
  const Icon = STATUS_ICON[status];

  return (
    <button
      className={`px-3 py-1 text-xs rounded-md font-medium flex items-center ${
        STATUS_STYLE[status]
      }`}
    >
      {Icon}
      {status}
    </button>
  );
};

export default OrderStatusBadge;
