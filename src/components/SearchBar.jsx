import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, Apple, Car, Box, Cpu, ShoppingCart } from "lucide-react";

export default function SearchBar({ onSearch, value, setValue }) {
  const location = useLocation();
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);

  // Sample products with type for icon mapping
  const products = [
    { name: "Apple", type: "fruit" },
    { name: "Banana", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Tomato", type: "vegetable" },
    { name: "Laptop", type: "electronics" },
    { name: "Shoes", type: "fashion" },
    { name: "Car", type: "vehicle" },
    { name: "Bike", type: "vehicle" },
    { name: "Rope", type: "tool" },
  ];

  // Read category from URL query param on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      const normalized = category.toLowerCase();
      setQuery(category);
      handleSearch(normalized);
    }
  }, [location.search]);

  const handleSearch = (q) => {
    const normalizedQuery = q.toLowerCase().trim();

    if (!normalizedQuery) {
      setResults([]);
      if (onSearch) onSearch("");
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(normalizedQuery)
    );

    setResults(filtered);
    if (onSearch) onSearch(normalizedQuery);
  };

  // Map product type to an icon
  const getIconByType = (type) => {
    switch (type) {
      case "fruit":
        return <Apple className="w-5 h-5 text-green-600" />;
      case "vegetable":
        return <Apple className="w-5 h-5 text-green-800" />;
      case "electronics":
        return <Cpu className="w-5 h-5 text-gray-600" />;
      case "vehicle":
        return <Car className="w-5 h-5 text-red-600" />;
      case "fashion":
        return <Box className="w-5 h-5 text-purple-600" />;
      case "tool":
        return <ShoppingCart className="w-5 h-5 text-yellow-600" />;
      default:
        return <ShoppingCart className="w-5 h-5 text-gray-400" />;
    }
  };

  // Get icon based on the query typed (partial match)
  const getIconForQuery = (q) => {
    if (!q) return <ShoppingCart className="w-5 h-5 text-gray-400" />;
    const product = products.find((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
    return product ? getIconByType(product.type) : <ShoppingCart className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-full max-w-md">
        {/* Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products or stores..."
            value={query}
            onChange={(e) => {
              const val = e.target.value;
              setQuery(val);
              if (setValue) setValue(val);
              handleSearch(val);
            }}
            className="w-full border rounded-2xl pl-10 pr-12 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Dynamic icon */}
          {query && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              {getIconForQuery(query)}
            </span>
          )}
        </div>

        {/* Results Dropdown */}
        {query && (
          <div className="mt-1 bg-white border rounded-b-2xl shadow-lg max-h-60 overflow-y-auto">
            {results.length > 0 ? (
              results.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
                  onClick={() => {
                    handleSearch(item.name);
                    setQuery(item.name);
                    if (setValue) setValue(item.name);
                  }}
                >
                  <span>{item.name}</span>
                  {getIconByType(item.type)}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-red-600 font-medium">
                ❌ Product not found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
