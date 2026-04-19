"use client";


export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl font-bold text-white mb-4">
          Global Package Tracking
        </h1>

        <p className="text-white mb-8 text-sm">
          Track your order easily using order number or phone number
        </p>

        <div className="flex bg-white rounded overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Enter order number or phone"
            className="flex-1 px-5 py-4 outline-none text-gray-700"
          />

          <button className="bg-red-500 text-white px-8 font-semibold">
            TRACK
          </button>
        </div>

        {/* Result Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 text-left flex gap-6 items-center">

        {/* Left Image */}
        <div className="w-20 h-20 rounded overflow-hidden bg-gray-100">
            <img
            src="https://via.placeholder.com/150"
            alt="product"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-1">
            <p className="text-lg font-semibold">
            Order #89-20251202-00002
            </p>

            <p className="text-gray-600">
            Status: <span className="text-green-600 font-medium">Shipped</span>
            </p>

            <p className="text-gray-500 text-sm">
            Placed on: 02 Dec 2025
            </p>

            <p className="text-gray-500 text-sm">
            Customer: Atik Hassan
            </p>
        </div>

        </div>

      </div>
    </div>
  );
}