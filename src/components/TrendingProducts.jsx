import { useNavigate } from "react-router-dom";

export default function TrendingProducts() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Wireless Noise-Cancelling Headphones",
      category: "Electronics",
      price: "$249.99",
      availability: "Available at 5 shops",
      image: "https://via.placeholder.com/400x200?text=Headphones",
    },
    {
      name: "Organic Coffee Beans",
      category: "Groceries",
      price: "$14.99",
      availability: "Available at 8 shops",
      image: "https://via.placeholder.com/400x200?text=Coffee+Beans",
    },
    {
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: "$199.99",
      availability: "Available at 3 shops",
      image: "https://via.placeholder.com/400x200?text=Fitness+Watch",
    },
    {
      name: "Leather Weekender Bag",
      category: "Fashion",
      price: "$159.99",
      availability: "Available at 2 shops",
      image: "https://via.placeholder.com/400x200?text=Weekender+Bag",
    },
  ];

  const handleProductClick = (productName) => {
    // Navigate to search page with query parameter
    navigate(`/search?query=${encodeURIComponent(productName)}`);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
            Trending Products
          </h2>
          <button
            onClick={() => navigate("/search")}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View All Products
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              onClick={() => handleProductClick(product.name)}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>

                {/* Category */}
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2">
                  {product.category}
                </span>

                {/* Price */}
                <p className="text-blue-600 font-semibold mb-3">{product.price}</p>

                {/* Availability */}
                <p className="text-gray-600 text-sm flex items-center gap-1 mt-auto">
                  <span className="material-icons text-sm">store</span>
                  {product.availability}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
