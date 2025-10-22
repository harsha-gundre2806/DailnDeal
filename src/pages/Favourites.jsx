import { useState } from "react";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedShops from "../components/FeaturedShops";
import TabSwitcher from "../components/TabSwitcher";

export default function Favourites({
  favouriteProducts = [],
  favouriteShops = [],
  savedProducts = [],
  savedShops = [],
  toggleFavouriteProduct = () => {},
  toggleFavouriteShop = () => {},
  toggleSaveProduct = () => {},
  toggleSaveShop = () => {},
}) {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = [
    { key: "products", label: "Favourite Products" },
    { key: "shops", label: "Favourite Shops" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <TabSwitcher tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "products" ? (
          favouriteProducts.length > 0 ? (
            <TrendingProducts
              products={favouriteProducts}
              savedProducts={savedProducts}
              favouriteProducts={favouriteProducts}
              toggleSaveProduct={toggleSaveProduct}
              toggleFavouriteProduct={toggleFavouriteProduct}
            />
          ) : (
            <p className="text-gray-500 text-center">No favourite products</p>
          )
        ) : favouriteShops.length > 0 ? (
          <FeaturedShops
            shops={favouriteShops}
            savedShops={savedShops}
            favouriteShops={favouriteShops}
            toggleSaveShop={toggleSaveShop}
            toggleFavouriteShop={toggleFavouriteShop}
          />
        ) : (
          <p className="text-gray-500 text-center">No favourite shops</p>
        )}
      </div>
    </div>
  );
}
