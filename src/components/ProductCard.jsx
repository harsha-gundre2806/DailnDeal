function ProductCard({ name = "Sample Product", price = "$100", image }) {
  return (
    <div className="border rounded-xl shadow p-4 bg-white">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-3">{name}</h3>
      <p className="text-gray-600">{price}</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
