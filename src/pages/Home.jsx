import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedShops from "../components/FeaturedShops";
import CallToAction from "../components/CallToAction";


export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false); // 👈 controls popup

  // Unified categories with icons
  const categories = [
    { name: "Electronics", icon: "devices" },
    { name: "Fashion", icon: "checkroom" },
    { name: "Groceries", icon: "local_grocery_store" },
    { name: "Home & Living", icon: "home" },
    { name: "Beauty", icon: "spa" },
    { name: "Sports", icon: "sports_soccer" },
  ];

  // Handle hero button click (top categories)
  const handleHeroCategoryClick = (category) => {
    setSearchQuery(category);
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <MainLayout>
     
      
      {/* Hero Section */}
      <section className="flex pt-20 flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-xl shadow-md px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-blue-600">
          Find Products in Stores Near You
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mb-8">
          Search for products and discover nearby shops. Connect with local
          retailers and find exactly what you need.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl mb-6">
          <SearchBar
            value={searchQuery}
            setValue={setSearchQuery}
            onSearch={(q) => console.log("Searching for:", q)}
          />
        </div>

        {/* Hero Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleHeroCategoryClick(cat.name)}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition flex items-center gap-1"
            >
              <span>{cat.name}</span>
              <span className="text-blue-600">&rarr;</span>
            </button>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-icons text-blue-600 text-5xl">store</span>
          <span className="text-2xl font-bold">2,500+</span>
          <span className="text-gray-600">Local Shops</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="material-icons text-blue-600 text-5xl">
            shopping_cart
          </span>
          <span className="text-2xl font-bold">100,000+</span>
          <span className="text-gray-600">Products</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="material-icons text-blue-600 text-5xl">
            location_city
          </span>
          <span className="text-2xl font-bold">50+</span>
          <span className="text-gray-600">Cities</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="material-icons text-blue-600 text-5xl">star</span>
          <span className="text-2xl font-bold">99%</span>
          <span className="text-gray-600">Satisfaction</span>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-600">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="material-icons text-blue-600 text-5xl mb-4">
              search
            </span>
            <h3 className="text-xl font-semibold mb-2">Search for Products</h3>
            <p className="text-gray-600">
              Enter what you're looking for and find out which nearby shops
              have it in stock.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="material-icons text-blue-600 text-5xl mb-4">
              store
            </span>
            <h3 className="text-xl font-semibold mb-2">Discover Local Shops</h3>
            <p className="text-gray-600">
              Browse through shops that have your items, check their locations
              and opening hours.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <span className="material-icons text-blue-600 text-5xl mb-4">
              chat
            </span>
            <h3 className="text-xl font-semibold mb-2">Connect and Purchase</h3>
            <p className="text-gray-600">
              Chat with shopkeepers to confirm availability or ask questions,
              then visit the store to make your purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-600">
          Browse by Category
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Explore products in your favorite categories
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleHeroCategoryClick(cat.name)}
              className="bg-blue-50 text-blue-700 rounded-md shadow-md p-4 flex flex-col items-center justify-center text-center hover:bg-blue-100 transition cursor-pointer"
            >
              <span className="material-icons text-4xl mb-2">{cat.icon}</span>
              <span className="font-semibold">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/search")}
            className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <span>View All Categories</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </section>

      <FeaturedShops />
      <TrendingProducts />
      <CallToAction />
    </MainLayout>
  );
}

