import { Badge } from "@/components/ui/badge";
import { Eye, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const orders = [
  {
    id: "ORD123456",
    date: "2024-06-15",
    total: "$150.00",
    status: "Delivered",
  },
  {
    id: "ORD123457",
    date: "2024-06-10",
    total: "$85.00",
    status: "Pending",
  },
  {
    id: "ORD123458",
    date: "2024-06-05",
    total: "$200.00",
    status: "Cancelled",
  },
  {
    id: "ORD123459",
    date: "2024-05-30",
    total: "$120.00",
    status: "Delivered",
  },
  {
    id: "ORD123460",
    date: "2024-05-25",
    total: "$60.00",
    status: "Pending",
  },
  {
    id: "ORD123461",
    date: "2024-06-15",
    total: "$150.00",
    status: "Cancelled",
  },
];

const page = () => {

  return (
    <div className="w-full bg-white border shadow-sm rounded-xl p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        My Orders
      </h2>
<div className="w-full overflow-x-auto">
  <table className="w-full min-w-[600px] border border-gray-200 rounded-lg overflow-hidden">
    {/* head */}
    <thead className="bg-gray-50">
      <tr className="text-left text-sm text-gray-500">
        <th className="px-6 py-4 font-medium">Order ID</th>
        <th className="px-6 py-4 font-medium">Date</th>
        <th className="px-6 py-4 font-medium">Total</th>
        <th className="px-6 py-4 font-medium">Status</th>
        <th className="px-6 py-4 font-medium">Action</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <tr
            key={order.id}
            className={`text-sm transition
              ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              hover:bg-gray-100
            `}
          >
            <td className="px-6 py-4 font-medium text-gray-900">
              {order.id}
            </td>

            <td className="px-6 py-4 text-gray-600">
              {order.date}
            </td>

            <td className="px-6 py-4 text-gray-600">
              {order.total}
            </td>

            <td className="px-6 py-4">
              <Badge
                variant="outline"
                className={
                  order.status === "Delivered"
                    ? "bg-green-700 text-white "
                    : order.status === "Pending"
                    ? "bg-[#ff9f43] text-white"
                    : order.status === "Processing"
                    ? "bg-[#00cfe8] text-white"
                    : order.status === "Cancelled"
                    ? "bg-[#ea3c3c] text-white"
                    : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-100"
                }
              >
                {order.status}
              </Badge>
            </td>

        <td className="px-6 py-4">
          <Link
            href="/order"
            className="inline-flex items-center justify-center p-2 rounded-md bg-green-700 text-white hover:bg-green-800 transition"
          >
            <EyeIcon size={20} />
          </Link>
        </td>

          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="5"
            className="px-6 py-10 text-center text-gray-400"
          >
            You haven't placed any orders yet.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


    </div>
  );
}

export default page;
