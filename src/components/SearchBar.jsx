import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch, value, setValue }) {
  const location = useLocation();
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);

  const products = ["Apple", "Banana", "Orange", "Mango", "Laptop", "Shoes"];

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
      p.toLowerCase().includes(normalizedQuery)
    );

    setResults(filtered);

    if (onSearch) onSearch(normalizedQuery);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md">
        {/* Input with icon */}
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
              handleSearch(val); // live search
            }}
            className="w-full border rounded-2xl pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Results Dropdown */}
        {query && (
          <div className="mt-1 bg-white border rounded-b-2xl shadow-md max-h-60 overflow-y-auto">
           {results.length > 0 ? (
  results.map((item, idx) => (
    <div
      key={idx}
      className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
      onClick={() => {
        // Trigger search for the clicked item
        handleSearch(item); // This searches for the clicked product
        setQuery(item); // Update input field to show the clicked product
        if (setValue) setValue(item); // Update external state if needed
      }}
    >
      {item}
    </div>
  ))
) : (
  <p className="px-4 py-2 text-red-600 font-medium">
    ❌ Product not found.
    <p className="px-4 py-2 text-green-600 font-medium">
      Going to add soon..
    </p>
  </p>
)}


          </div>
        )}
      </div>
    </div>
  );
}
