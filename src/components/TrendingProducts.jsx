import { useNavigate } from "react-router-dom";

export default function TrendingProducts({
  products = [],
  savedProducts = [],
  favouriteProducts = [],
  toggleSaveProduct = () => {},
  toggleFavouriteProduct = () => {},
}) {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const isSaved = savedProducts.some((p) => p.name === product.name);
          const isFavourite = favouriteProducts.some(
            (p) => p.name === product.name
          );

          return (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-md flex flex-col relative cursor-pointer hover:shadow-lg transition"
              onClick={() =>
                navigate(`/products/${encodeURIComponent(product.name)}`)
              }
            >
              {/* Save & Favourite buttons */}
              <div className="absolute top-3 right-3 flex gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveProduct(product);
                  }}
                  className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
                  aria-label={isSaved ? "Unsave Product" : "Save Product"}
                >
                  <span
                    className={`material-icons ${
                      isSaved ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    bookmark
                  </span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavouriteProduct(product);
                  }}
                  className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
                  aria-label={isFavourite ? "Remove Favourite" : "Favourite Product"}
                >
                  <span
                    className={`material-icons ${
                      isFavourite ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    favorite
                  </span>
                </button>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                {product.rating && (
                  <div className="flex items-center text-yellow-500 mb-2">
                    <span className="material-icons text-lg">star</span>
                    <span className="ml-1 font-semibold">{product.rating}</span>
                    <span className="ml-2 text-gray-600">({product.reviews})</span>
                  </div>
                )}
                {product.description && (
                  <p className="text-gray-600">{product.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
