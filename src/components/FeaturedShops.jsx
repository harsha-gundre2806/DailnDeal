import { useNavigate } from "react-router-dom";

export default function FeaturedShops({
  shops = [],
  savedShops = [],
  favouriteShops = [],
  toggleSaveShop = () => {},
  toggleFavouriteShop = () => {},
}) {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {shops.map((shop) => {
          const isSaved = savedShops.some((s) => s.name === shop.name);
          const isFavourite = favouriteShops.some((s) => s.name === shop.name);

          return (
            <div
              key={shop.name}
              className="bg-white rounded-lg shadow-md flex flex-col relative cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/shops/${encodeURIComponent(shop.name)}`)}
            >
              {/* Save & Favourite buttons */}
              <div className="absolute top-3 right-3 flex gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveShop(shop);
                  }}
                  className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
                  aria-label={isSaved ? "Unsave Shop" : "Save Shop"}
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
                    toggleFavouriteShop(shop);
                  }}
                  className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
                  aria-label={isFavourite ? "Remove Favourite" : "Favourite Shop"}
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
                src={shop.image}
                alt={shop.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{shop.name}</h3>
                {shop.rating && (
                  <div className="flex items-center text-yellow-500 mb-2">
                    <span className="material-icons text-lg">star</span>
                    <span className="ml-1 font-semibold">{shop.rating}</span>
                    <span className="ml-2 text-gray-600">
                      ({shop.reviews})
                    </span>
                  </div>
                )}
                {shop.description && <p className="text-gray-600">{shop.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
