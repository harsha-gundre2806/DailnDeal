import { useState, useEffect } from "react";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedShops from "../components/FeaturedShops";

export default function Favourites() {
  const [activeTab, setActiveTab] = useState("products"); // "products" or "shops"
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [favouriteShops, setFavouriteShops] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("favouriteProducts")) || [];
    const shops = JSON.parse(localStorage.getItem("favouriteShops")) || [];
    setFavouriteProducts(products);
    setFavouriteShops(shops);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "products"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("products")}
          >
            Favourite Products
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "shops"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("shops")}
          >
            Favourite Shops
          </button>
        </div>

        {/* Products Card */}
        {activeTab === "products" && (
          <div className="bg-white shadow-md rounded-xl p-6 mb-8 transition-all duration-500 ease-in-out">
            {favouriteProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favouriteProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img
                      src={product.image || "/placeholder.png"}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-gray-700 font-medium mt-1">{product.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No favourite products</p>
            )}

            {/* Trending Products */}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Trending Products
              </h2>
              <TrendingProducts />
            </div>
          </div>
        )}

        {/* Shops Card */}
        {activeTab === "shops" && (
          <div className="bg-white shadow-md rounded-xl p-6 mb-8 transition-all duration-500 ease-in-out">
            {favouriteShops.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favouriteShops.map((shop, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img
                      src={shop.image || "/shop-placeholder.png"}
                      alt={shop.name}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-semibold text-gray-800">{shop.name}</h3>
                    <p className="text-sm text-gray-500">{shop.category}</p>
                    <p className="text-gray-700 font-medium mt-1">{shop.location}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No favourite shops</p>
            )}

            {/* Featured Shops */}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Featured Shops
              </h2>
              <FeaturedShops />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
