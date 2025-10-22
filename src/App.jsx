import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/profile";
import Saved from "./pages/Saved";
import Favourites from "./pages/Favourites";
import Notifications from "./pages/Notifications";
import MyBusiness from "./pages/MyBusiness";
import Feedback from "./pages/Feedback";

import AdminPage from "./login/AdminPage";

import Terms from "./terms/Terms";
import Privacy from "./terms/Privacy";
import Help from "./terms/Help";


import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

// Example search page
function SearchPage({
  allProducts,
  savedProducts,
  favouriteProducts,
  toggleSaveProduct,
  toggleFavouriteProduct,
}) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (q) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const filtered = allProducts.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <SearchBar value={query} setValue={setQuery} onSearch={handleSearch} />
      <div className="mt-4">
        {results.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (
              <li key={product.name}>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover mb-2"
                  />
                  <h3 className="font-bold">{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => toggleSaveProduct(product)}
                      className={`px-2 py-1 rounded ${
                        savedProducts.some((p) => p.name === product.name)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {savedProducts.some((p) => p.name === product.name)
                        ? "Saved"
                        : "Save"}
                    </button>
                    <button
                      onClick={() => toggleFavouriteProduct(product)}
                      className={`px-2 py-1 rounded ${
                        favouriteProducts.some((p) => p.name === product.name)
                          ? "bg-red-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {favouriteProducts.some(
                        (p) => p.name === product.name
                      )
                        ? "Favourite"
                        : "Favourite"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">No results found</p>
        )}
      </div>
    </div>
  );
}

function App() {
  // Global state
  const [savedProducts, setSavedProducts] = useState([]);
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [savedShops, setSavedShops] = useState([]);
  const [favouriteShops, setFavouriteShops] = useState([]);

  // Example data
  const allProducts = [
    {
      name: "Smartphone X1",
      rating: 4.8,
      reviews: 124,
      description: "Latest smartphone with amazing camera.",
      image: "https://via.placeholder.com/400x200?text=Smartphone+X1",
    },
    {
      name: "Organic Apples",
      rating: 4.5,
      reviews: 89,
      description: "Fresh organic apples from local farms.",
      image: "https://via.placeholder.com/400x200?text=Organic+Apples",
    },
  ];

  const allShops = [
    {
      name: "Gadget Valley",
      rating: 4.8,
      reviews: 124,
      description: "The ultimate tech store with the latest gadgets.",
      image: "https://via.placeholder.com/400x200?text=Gadget+Valley",
    },
    {
      name: "Fresh Grocery Market",
      rating: 4.5,
      reviews: 89,
      description: "Local grocery store with fresh produce.",
      image: "https://via.placeholder.com/400x200?text=Fresh+Grocery+Market",
    },
  ];

  // Toggle functions
  const toggleSaveProduct = (product) => {
    setSavedProducts((prev) =>
      prev.some((p) => p.name === product.name)
        ? prev.filter((p) => p.name !== product.name)
        : [...prev, product]
    );
  };

  const toggleFavouriteProduct = (product) => {
    setFavouriteProducts((prev) =>
      prev.some((p) => p.name === product.name)
        ? prev.filter((p) => p.name !== product.name)
        : [...prev, product]
    );
  };

  const toggleSaveShop = (shop) => {
    setSavedShops((prev) =>
      prev.some((s) => s.name === shop.name)
        ? prev.filter((s) => s.name !== shop.name)
        : [...prev, shop]
    );
  };

  const toggleFavouriteShop = (shop) => {
    setFavouriteShops((prev) =>
      prev.some((s) => s.name === shop.name)
        ? prev.filter((s) => s.name !== shop.name)
        : [...prev, shop]
    );
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              allProducts={allProducts}
              allShops={allShops}
              savedProducts={savedProducts}
              favouriteProducts={favouriteProducts}
              savedShops={savedShops}
              favouriteShops={favouriteShops}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
              toggleSaveShop={toggleSaveShop}
              toggleFavouriteShop={toggleFavouriteShop}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              allProducts={allProducts}
              allShops={allShops}
              savedProducts={savedProducts}
              favouriteProducts={favouriteProducts}
              savedShops={savedShops}
              favouriteShops={favouriteShops}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
              toggleSaveShop={toggleSaveShop}
              toggleFavouriteShop={toggleFavouriteShop}
            />
          }
        />
        <Route
          path="/saved"
          element={
            <Saved
              savedProducts={savedProducts}
              savedShops={savedShops}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
              toggleSaveShop={toggleSaveShop}
              toggleFavouriteShop={toggleFavouriteShop}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              favouriteProducts={favouriteProducts}
              favouriteShops={favouriteShops}
              savedProducts={savedProducts}
              savedShops={savedShops}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
              toggleSaveShop={toggleSaveShop}
              toggleFavouriteShop={toggleFavouriteShop}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              allProducts={allProducts}
              savedProducts={savedProducts}
              favouriteProducts={favouriteProducts}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/t&c" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/my-business" element={<MyBusiness />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
