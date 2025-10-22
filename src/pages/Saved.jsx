import { useState } from "react";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedShops from "../components/FeaturedShops";
import TabSwitcher from "../components/TabSwitcher";

export default function Saved({
  savedProducts = [],
  favouriteProducts = [],
  savedShops = [],
  favouriteShops = [],
  toggleSaveProduct = () => {},
  toggleFavouriteProduct = () => {},
  toggleSaveShop = () => {},
  toggleFavouriteShop = () => {},
}) {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = [
    { key: "products", label: "Saved Products" },
    { key: "shops", label: "Saved Shops" },
  ];

  // Helper function to determine if a product/shop is favourite or saved
  const isFavourite = (item, favourites) => favourites.some(f => f.id === item.id);
  const isSaved = (item, saved) => saved.some(s => s.id === item.id);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <TabSwitcher tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "products" ? (
          savedProducts.length > 0 ? (
            <TrendingProducts
              products={savedProducts}
              savedProducts={savedProducts}
              favouriteProducts={favouriteProducts}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
              isFavourite={isFavourite}
              isSaved={isSaved}
            />
          ) : (
            <p className="text-gray-500 text-center mt-8">No saved products</p>
          )
        ) : savedShops.length > 0 ? (
          <FeaturedShops
            shops={savedShops}
            savedShops={savedShops}
            favouriteShops={favouriteShops}
            toggleSaveShop={toggleSaveShop}
            toggleFavouriteShop={toggleFavouriteShop}
            isFavourite={isFavourite}
            isSaved={isSaved}
          />
        ) : (
          <p className="text-gray-500 text-center mt-8">No saved shops</p>
        )}
      </div>
    </div>
  );
}
