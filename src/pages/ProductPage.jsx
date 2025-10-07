import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  // For dynamic route: /products/:id
  // You can fetch the product info using useParams if needed
  // import { useParams } from "react-router-dom";
  // const { id } = useParams();

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>

      {/* Product card */}
      <ProductCard />

      {/* Where to buy section */}
      <div className="mt-6 pt-20">
        <h2 className="text-xl font-semibold mb-2">Where to Buy</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-gray-100 rounded">Store A - $99</li>
          <li className="p-3 bg-gray-100 rounded">Store B - $105</li>
        </ul>
      </div>
    </MainLayout>
  );
}
