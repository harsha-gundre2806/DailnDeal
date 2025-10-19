import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import StorePage from "./pages/StorePage";
import NotFound from "./pages/NotFound";
// Role-based pages
import AdminPage from "./login/AdminPage";
import ShopkeeperPage from "./login/ShopkeeperPage";
import CustomerPage from "./login/CustomerPage";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar"; 
import { useState } from "react";
import About from "./components/About";

function SearchPage() {
  const [results, setResults] = useState([]);
  const products = ["Apple", "Banana", "Orange", "Mango", "Laptop", "Shoes"]; // example

  const handleSearch = (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = products.filter((p) =>
      p.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        {results.length > 0 ? (
          <ul className="list-disc pl-6">
            {results.map((item, idx) => (
              <li key={idx} className="text-lg">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-red-600 font-semibold mt-2"></p>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Permanent Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/stores/:id" element={<StorePage />} />
        <Route path="/about" element={<About />} />
        {/* Role-based routes */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/shopkeeper" element={<ShopkeeperPage />} />
        <Route path="/customer" element={<CustomerPage />} />

        {/* Search page */}
        <Route path="/search" element={<SearchPage />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Permanent Footer */}
      <Footer />
    </Router>
  );
}

export default App;
