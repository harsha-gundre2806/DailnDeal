import MainLayout from "../layouts/MainLayout";
import StoreCard from "../components/StoreCard";
import ProductList from "../components/TrendingProducts";

function StorePage() {
  return (
    <MainLayout>
      <section className="max-w-5xl mx-auto px-4 py-8">
        <StoreCard />
        <h2 className="text-xl font-semibold mt-6 mb-4">Available Products</h2>
        <ProductList />
      </section>
    </MainLayout>
  );
}

export default StorePage;
