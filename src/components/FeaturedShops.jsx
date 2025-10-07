import { useNavigate } from "react-router-dom";

export default function FeaturedShops() {
  const navigate = useNavigate();

  const shops = [
    {
      name: "Gadget Valley",
      rating: 4.8,
      reviews: 124,
      description:
        "The ultimate tech store with the latest gadgets and electronics. Find everything from smartphones to gaming accessories.",
      distance: "1.2 miles away",
      status: "Open Now",
      tags: ["Electronics", "Gadgets", "Computers", "Delivery", "Curbside Pickup"],
      image: "https://via.placeholder.com/400x200?text=Gadget+Valley",
      address: "123 Tech Street, City",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Fresh Grocery Market",
      rating: 4.5,
      reviews: 89,
      description:
        "Local grocery store offering fresh produce, organic foods, and everyday essentials at competitive prices.",
      distance: "0.8 miles away",
      status: "Open Now",
      tags: ["Groceries", "Organic", "Local", "Parking", "Delivery"],
      image: "https://via.placeholder.com/400x200?text=Fresh+Grocery+Market",
      address: "456 Market Avenue, City",
      phone: "+1 (555) 234-5678",
    },
    {
      name: "Fashion Forward",
      rating: 4.3,
      reviews: 67,
      description:
        "Trendy clothing and accessories for men and women. Stay stylish with the latest fashion trends.",
      distance: "2.1 miles away",
      status: "Closed",
      tags: ["Fashion", "Accessories", "Footwear", "Fitting Rooms", "Gift Cards"],
      image: "https://via.placeholder.com/400x200?text=Fashion+Forward",
      address: "789 Fashion Blvd, City",
      phone: "+1 (555) 345-6789",
    },
  ];

  return (
    <section className="py-16 px-4  bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
            Featured Shops
          </h2>
          <button
            onClick={() => navigate("/shops")}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View All Shops
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>

        {/* Shop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div
              key={shop.name}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={shop.image}
                alt={shop.name}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Shop Name + Rating */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{shop.name}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="material-icons text-lg">star</span>
                  <span className="ml-1 font-semibold">{shop.rating}</span>
                  <span className="ml-2 text-gray-600">({shop.reviews})</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{shop.description}</p>

                {/* Distance & Status */}
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="material-icons text-blue-500">location_on</span>
                  <span>{shop.distance}</span>
                </div>
                <div
                  className={`text-sm font-semibold mb-4 ${
                    shop.status === "Open Now" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {shop.status}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {shop.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          shop.address
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
                  >
                    <span className="material-icons text-sm">directions</span>
                    Directions
                  </button>

                  <button
                    onClick={() => (window.location.href = `tel:${shop.phone}`)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition text-sm"
                  >
                    <span className="material-icons text-sm">call</span>
                    Contact
                  </button>

                  <button
                    onClick={() => navigate(`/shops/${encodeURIComponent(shop.name)}`)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition text-sm"
                  >
                    <span className="material-icons text-sm">info</span>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
