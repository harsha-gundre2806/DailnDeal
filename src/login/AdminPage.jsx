import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home"; // Import your Home page

export default function AdminPage() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    reviews: "",
    description: "",
    lat: "",
    lng: "",
    openTime: "",
    closeTime: "",
    categories: "",
    delivery: "",
    imageFile: null,
  });

  // Request user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Geolocation permission denied or unavailable.", error);
        }
      );
    }
  }, []);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add product
  const handleAddProduct = () => {
    setProducts([...products, formData]);
    setFormData({
      name: "",
      price: "",
      rating: "",
      reviews: "",
      description: "",
      lat: "",
      lng: "",
      openTime: "",
      closeTime: "",
      categories: "",
      delivery: "",
      imageFile: null,
    });
    setShowForm(false);
  };

  // Calculate distance (Haversine formula)
  const getDistance = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1); // km
  };

  // Check if store is open
  const isOpenNow = (openTime, closeTime) => {
    if (!openTime || !closeTime) return false;
    const now = new Date();
    const [openH, openM] = openTime.split(":").map(Number);
    const [closeH, closeM] = closeTime.split(":").map(Number);
    const openDate = new Date();
    openDate.setHours(openH, openM, 0);
    const closeDate = new Date();
    closeDate.setHours(closeH, closeM, 0);
    return now >= openDate && now <= closeDate;
  };

  // Determine if the current path is '/admin'
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="p-4">
      {isAdminPage && (
        <div className="bg-red-100 p-2 text-center font-bold mb-4">
          Admin Mode Enabled
        </div>
      )}

      {/* Add Product Button */}
      {isAdminPage && (
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </div>
      )}

      {/* Product Form Modal */}
      {showForm && isAdminPage && (
        <div className="fixed inset-0 pt-20 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Add Product Details</h2>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Rating (e.g., 4.8)"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Reviews (e.g., 124)"
                name="reviews"
                value={formData.reviews}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="time"
                placeholder="Open Time"
                name="openTime"
                value={formData.openTime}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="time"
                placeholder="Close Time"
                name="closeTime"
                value={formData.closeTime}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Categories (comma separated)"
                name="categories"
                value={formData.categories}
                onChange={handleInputChange}
                className="border p-2 rounded col-span-2"
              />
              <input
                type="text"
                placeholder="Delivery info"
                name="delivery"
                value={formData.delivery}
                onChange={handleInputChange}
                className="border p-2 rounded col-span-2"
              />
              <input
                type="file"
                accept="image/*"
                name="imageFile"
                onChange={handleInputChange}
                className="border p-2 rounded col-span-2"
              />
              <textarea
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="border p-2 rounded col-span-2"
              />
              <input
                type="text"
                placeholder="Latitude"
                name="lat"
                value={formData.lat}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Longitude"
                name="lng"
                value={formData.lng}
                onChange={handleInputChange}
                className="border p-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((prod, idx) => {
          const distance =
            userLocation && prod.lat && prod.lng
              ? getDistance(
                  userLocation.lat,
                  userLocation.lng,
                  parseFloat(prod.lat),
                  parseFloat(prod.lng)
                )
              : null;

          const openStatus = isOpenNow(prod.openTime, prod.closeTime);

          const imageURL = prod.imageFile
            ? URL.createObjectURL(prod.imageFile)
            : "";

          return (
            <div
              key={idx}
              className="border rounded-xl shadow-lg p-4 bg-white flex flex-col"
            >
              {imageURL && (
                <img
                  src={imageURL}
                  alt={prod.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}
              <h3 className="text-lg font-bold">{prod.name}</h3>
              <p className="text-blue-600 font-semibold">${prod.price}</p>
              <p className="text-sm text-yellow-500">
                ⭐ {prod.rating} ({prod.reviews})
              </p>
              <p className="text-sm mt-1">{prod.description}</p>
              {distance && (
                <p className="text-sm mt-1 text-gray-600">{distance} km away</p>
              )}
              <p
                className={`text-sm mt-1 font-semibold ${
                  openStatus ? "text-green-600" : "text-red-600"
                }`}
              >
                {openStatus ? "Open Now" : "Closed"}
              </p>
              <p className="text-sm mt-1 text-gray-600">
                Delivery: {prod.delivery}
              </p>
              {/* Categories are not displayed but can be used for search */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
