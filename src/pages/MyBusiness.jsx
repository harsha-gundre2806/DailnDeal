import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

export default function MyBusiness() {
  const [shops, setShops] = useState([]);
  const [selectedShopSummary, setSelectedShopSummary] = useState(null);
  const [shopForm, setShopForm] = useState({
    name: "",
    image: "",
    address: "",
    contact: "",
    location: "",
  });
  const [deleteShopId, setDeleteShopId] = useState(null);

  useEffect(() => {
    const savedShops = JSON.parse(localStorage.getItem("myShops")) || [];
    setShops(savedShops);
  }, []);

  const handleInputChange = (e) => {
    setShopForm({ ...shopForm, [e.target.name]: e.target.value });
  };

  const handleAddShop = (e) => {
    e.preventDefault();
    const { name, image, address, contact, location } = shopForm;
    if (!name || !image || !address || !contact || !location) {
      alert("Please fill all fields");
      return;
    }

    const newShop = {
      id: Date.now(),
      ...shopForm,
    };

    const updatedShops = [...shops, newShop];
    setShops(updatedShops);
    localStorage.setItem("myShops", JSON.stringify(updatedShops));
    setShopForm({ name: "", image: "", address: "", contact: "", location: "" });
  };

  const handleSelectShop = (shop) => {
    setSelectedShopSummary(shop);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Add Shop Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Add Your Shop</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleAddShop}>
            <input
              type="text"
              name="name"
              placeholder="Shop Name"
              value={shopForm.name}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="image"
              placeholder="Shop Image URL"
              value={shopForm.image}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shopForm.address}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={shopForm.contact}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={shopForm.location}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2"
            />
            <button
              type="submit"
              className="col-span-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
            >
              Add Shop
            </button>
          </form>
        </div>

        {/* Subscription Packs */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Subscription Packs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition text-center">
              <p className="text-lg font-semibold">₹500 / Month</p>
              <p>10 items display</p>
              <p className="text-sm text-green-600">1 month free trial</p>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition text-center">
              <p className="text-lg font-semibold">₹1000 / Month</p>
              <p>25 items display</p>
              
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition text-center">
              <p className="text-lg font-semibold">₹2000 / Month</p>
              <p>50 items display</p>
              
            </div>
          </div>
        </div>

        {/* My Shops */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">My Shops</h2>
          {shops.length === 0 ? (
            <p className="text-gray-500 text-center">No shops added yet</p>
          ) : (
            <div className="space-y-4">
              {shops.map((shop) => (
                <div
                  key={shop.id}
                  className="flex items-center justify-between border p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-4" onClick={() => handleSelectShop(shop)}>
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-semibold">{shop.name}</p>
                      <p className="text-sm text-gray-500">{shop.address}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setDeleteShopId(shop.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Delete Shop"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Shop Summary */}
        {selectedShopSummary && (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Shop Summary</h3>
            <div className="flex items-center gap-4">
              <img
                src={selectedShopSummary.image}
                alt={selectedShopSummary.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold text-lg">{selectedShopSummary.name}</p>
                <p className="text-gray-500">{selectedShopSummary.address}</p>
                <p className="text-gray-700 mt-1">Contact: {selectedShopSummary.contact}</p>
                <p className="text-gray-700 mt-1">Location: {selectedShopSummary.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteShopId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <p className="mb-4 text-gray-700">Are you sure you want to delete this shop?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShops(shops.filter((shop) => shop.id !== deleteShopId));
                  if (selectedShopSummary?.id === deleteShopId) setSelectedShopSummary(null);
                  setDeleteShopId(null);
                  localStorage.setItem(
                    "myShops",
                    JSON.stringify(shops.filter((shop) => shop.id !== deleteShopId))
                  );
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteShopId(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
