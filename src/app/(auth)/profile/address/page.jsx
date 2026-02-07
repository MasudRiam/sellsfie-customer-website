"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const addressesData = [
  {
    id: 1,
    type: "Main house",
    name: "Maren Calzoni",
    phone: "(702) 555-0122",
    address: "4517 Washington Ave, Manchester, Kentucky 39495",
    mapUrl: "https://via.placeholder.com/80x80.png?text=Map",
  },
  {
    id: 2,
    type: "Office",
    name: "Jordyn Curtis",
    phone: "(505) 555-0125",
    address: "6036 Robindale Ave, Dearborn Heights, Michigan(MI), 48127",
    mapUrl: "https://via.placeholder.com/80x80.png?text=Map",
  },
];

const AddressPage = () => {
  const [selectedId, setSelectedId] = useState(addressesData[0].id);
  const [addresses, setAddresses] = useState(addressesData);

  const handleSelect = (id) => setSelectedId(id);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    if (selectedId === id && addresses.length > 1) {
      setSelectedId(addresses[0].id);
    }
  };

  const handleAddAddress = () => {
    const newAddress = {
      id: Date.now(),
      type: "New",
      name: "New Address",
      phone: "(000) 000-0000",
      address: "Enter address here",
      mapUrl: "https://via.placeholder.com/80x80.png?text=Map",
    };
    setAddresses([newAddress, ...addresses]);
    setSelectedId(newAddress.id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Address List</h2>
        <button
          onClick={handleAddAddress}
          className="px-4 py-2 bg-green-700 hover:bg-[#2e2e2e] text-white rounded cursor-pointer"
        >
          + Add Address
        </button>
      </div>

      {/* <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            onClick={() => handleSelect(addr.id)}
            className={`flex items-center p-4 border rounded-xl transition cursor-pointer
              ${selectedId === addr.id ? "border-green-500" : "border-gray-200"}
              hover:border-green-400
            `}
          >
            Radio Button
            <input
              type="radio"
              checked={selectedId === addr.id}
              onChange={() => handleSelect(addr.id)}
              className="mr-4 w-5 h-5 text-green-600"
            />

            Map
            <img
              src={addr.mapUrl}
              alt="Map"
              className="w-20 h-20 rounded-lg object-cover mr-4"
            />

            Address Info
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    addr.type === "Main house"
                      ? "bg-blue-100 text-blue-700"
                      : addr.type === "Office"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {addr.type}
                </span>
                <h3 className="font-medium text-gray-900">{addr.name}</h3>
              </div>
              <p className="text-gray-600">{addr.phone}</p>
              <p className="text-gray-400 text-sm">{addr.address}</p>
            </div>

            Actions
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
                Edit address
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // stop card click
                  handleDelete(addr.id);
                }}
                className="px-3 py-1 text-sm border rounded hover:bg-red-100 text-red-600"
              >
                Delete address
              </button>
            </div>
          </div>
        ))}
      </div> */}

    <div className="flex border rounded-xl justify-between">
      <div className=" flex p-4 gap-5">
        
        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://maps.app.goo.gl/Ub3jSwbDW8D8cvRt9" alt="map" />
        </div>
        
        <div>
          <div>

            <Badge variant="outline" className="bg-yellow-100 text-yellow-700">Main house</Badge>
            <h3 className="mb-1">Maren Calzoni</h3>
          </div>
          <div>
            <p>(702) 555-0122</p>
            <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
        </div>

        <div className="flex gap-2 mt-3">
          <button className="px-4 py-2 border rounded-md text-medium cursor-pointer hover:bg-gray-100">Edit address</button>
          <button className="px-4 py-2 text-medium border rounded-md cursor-pointer hover:bg-red-100 text-red-600">Delete address</button>
        </div>
      </div>

      </div>
      {/* input radio  */}
      <div className="text-right p-4">
            <input
              type="radio"
              className="mr-4 w-5 h-5 text-green-600"
            />
      </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-2 bg-green-700 hover:bg-[#2e2e2e] cursor-pointer text-white rounded">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
