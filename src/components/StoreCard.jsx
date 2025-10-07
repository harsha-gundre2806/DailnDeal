function StoreCard({ name = "Sample Store", location = "City Center", logo }) {
  return (
    <div className="flex items-center gap-4 border rounded-xl p-4 shadow bg-white">
      <img
        src={logo || "https://via.placeholder.com/80"}
        alt={name}
        className="w-16 h-16 object-cover rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
}

export default StoreCard;
